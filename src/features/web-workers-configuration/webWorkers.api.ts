import { MAX_WORKERS_LIMIT, runInDevEnvOnly } from '@/app-config-and-utils'
import {
    ISocketDTO,
    IWorkerKey,
    IWorkerTask,
    IWorkerWorkState,
    WorkerKeyType,
    WorkerNameType
} from '@/features/web-workers-configuration/webWorkers.types'
import store from '@/core/store.core'
import {
    handleWorkerErrorStateReport,
    handleWorkerReadyStateReport,
    handleWorkerWorkStateReport
} from '@/features/web-workers-configuration/webWorkersSlice'
import { workersKeysNames } from '@/features/web-workers-configuration/add-new-physical-worker-here'



// Remember: worker numbers are counted from 1, NOT FROM 0 ( business rule ;-) )
// output: calculationWorker1...
//
export const constructWorkerNameByOrderIndex = (workerOrderNumber: number | string): WorkerNameType =>
    `${workersKeysNames.calculationWorker.workerName}${Number(workerOrderNumber)}`


export const constructCalculationWorkerKeyByName = (workerName: string): IWorkerKey => ({
    workerName: workerName,
    fileName: workersKeysNames.calculationWorker.fileName
})


export const constructWorkerJobSocketDTO = <T>(event: MessageEvent<T>, workerKey: WorkerKeyType): ISocketDTO<T> => ({
    keyNames: workerKey,
    unknownData: event.data
})


export const getWorkerInstanceAbsolutely = (workerKey: WorkerKeyType) => window[workerKey.workerName] as Worker


// Strict, in-action check of worker activity
//
export const getWorkerRealActivityStatus = (workerName: WorkerNameType): boolean => {
    const LOOK_UP_STRING = 'orker'
    return String(window[workerName]).includes(LOOK_UP_STRING)
}


export const getExistingWorkersKeys = (): IWorkerKey[] => {

    // Maybe-worker array of the maximum number of web-workers-configuration:
    // [Worker, undefined, Worker, Worker, undefined, ...].length === MAX_WORKERS_LIMIT
    //
    const allWorkersPossibilities = Array(MAX_WORKERS_LIMIT as number).fill(undefined)
        .reduce((accumulator: [] | IWorkerKey[], _, index): IWorkerKey[] => {
            const currentWorkerName = constructWorkerNameByOrderIndex(index + 1)

            if (typeof window[currentWorkerName] !== 'undefined' && getWorkerRealActivityStatus(currentWorkerName)) {
                return [...accumulator, {workerName: currentWorkerName}]
            }
            return accumulator
        }, [])

    // Filter out all undefined - leave just worker keys
    //
    return allWorkersPossibilities.filter((val: IWorkerKey | undefined) =>
        typeof val !== 'undefined') as IWorkerKey[]
}


export const queueWorkerTask = (workerKey: WorkerKeyType, workerTask: IWorkerTask, msgForDevConsoleLog = ''): void => {
    const workerWindowInstance = getWorkerInstanceAbsolutely(workerKey)

    if (!workerWindowInstance) runInDevEnvOnly(() =>
        console.warn(`[Bug detector]: Instance of ${workerKey.workerName} is ${typeof workerWindowInstance}`))

    const workerData: ISocketDTO<IWorkerTask> = {keyNames: workerKey, unknownData: workerTask}
    workerWindowInstance.postMessage(workerData)
    runInDevEnvOnly(() => console.log(`Worker command queued: [ ${workerTask.workerTaskName} ]. ${msgForDevConsoleLog ? msgForDevConsoleLog : ''}`))
}


export const queueAllWorkersTask = (workerTask: IWorkerTask, msgForDevConsoleLog = ''): void => {
    const activeWorkersByNow: IWorkerKey[] = getExistingWorkersKeys()

    activeWorkersByNow.forEach((workerKey: IWorkerKey) => {
        queueWorkerTask(workerKey, workerTask, msgForDevConsoleLog)
    })
}


export const flagIfWorkerHasError = (workerKey: WorkerKeyType, isError: boolean, error: Error = {
    name: `Default error of ${workerKey.workerName}.`,
    message: 'Please pass a valid error msg.'
}): true => {
    if (isError) {
        store.dispatch(handleWorkerErrorStateReport({
            workerName: workerKey.workerName,
            error: true
        }))
        runInDevEnvOnly(() => console.error(error))
    } else {
        store.dispatch(handleWorkerErrorStateReport({
            workerName: workerKey.workerName,
            error: false
        }))
    }

    return true
}


export const updateWorkerIsReadyState = (workerKey: WorkerKeyType): true => {
    const isReady: boolean = process.browser && (!!window[workerKey.workerName])

    store.dispatch(handleWorkerReadyStateReport({
        workerName: workerKey.workerName,
        ready: isReady
    }))

    return true
}


export const flagIfWorkerIsWorking = (workerKey: WorkerKeyType, workingNewFlag: boolean): true => {
    const currentWorkerWorkState: IWorkerWorkState | undefined = store.getState().calculationsWorkersSlice.workStatuses[workerKey.workerName]

    if (!currentWorkerWorkState || currentWorkerWorkState.working !== workingNewFlag) {
        store.dispatch(handleWorkerWorkStateReport({
            workerName: workerKey.workerName,
            working: workingNewFlag
        }))
    }

    return true
}


// Give number or string with the range, get a number in the range.
//
export const getValidatedPassedAmount = (requestedAmount: number | string, minValue: number, maxValue: number): number => {

    // Usually: a whitespace or nothing. (probably user removes everything from input by a backspace)
    if (!requestedAmount) return 0

    // IF fulfilled, when number has more than x digits, where x is amount of digits in the passed number.
    if (typeof requestedAmount === 'string' && requestedAmount.length > String(maxValue).length) return maxValue

    // Simple range check and making a nice iteration loop when User will use arrows to control amount
    const newAmountValue = Number(requestedAmount)
    if (newAmountValue < minValue) return minValue
    if (newAmountValue > maxValue) return maxValue

    // Validation passed, return actual value
    return newAmountValue
}

export default {}
