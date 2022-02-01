import React, { useState } from 'react'
import { queueWorkerTask } from '@/features/web-workers-configuration/webWorkers.api'
import { WEB_WORKER_TASKS } from '@/features/web-workers-configuration/webWorkersEvents'
import { WorkerKeyType } from '@/features/web-workers-configuration/webWorkers.types'
import {
    useSingleWorkerSpecificStatus,
    UseSpecificWorkerStatusCommandEnum
} from '@/features/calculation-workers-configuration/calculationWorkers.hooks'
import { Button } from '@mui/material'



interface IProps {
    workerKey: WorkerKeyType
}


const CalculationWorkersWorkSwitchMolecule = ({workerKey}: IProps): JSX.Element => {

    // Listening to worker's ready state
    //
    const [isWorkerReady] = useSingleWorkerSpecificStatus(UseSpecificWorkerStatusCommandEnum.ready, workerKey)

    // Listening to worker's work state
    //
    const [isWorkerWorking] = useSingleWorkerSpecificStatus(UseSpecificWorkerStatusCommandEnum.working, workerKey)

    // Complexity of calculations defined by user
    //
    const [userInputComplexity, setUserInputComplexity] = useState(25)



    if (!isWorkerReady) return <section><span>Loading {workerKey.workerName}...<br/><br/></span></section>
    return (
        <section>

            <input
                disabled={isWorkerWorking}
                type={'number'}
                value={userInputComplexity}
                min={2}
                max={200}
                onInput={(e) => setUserInputComplexity(Number(e.currentTarget.value))}
            />

            <Button onClick={() => {
                queueWorkerTask(workerKey, !isWorkerWorking ?
                    {workerTaskName: WEB_WORKER_TASKS.turnOnCalculations, complexity: userInputComplexity}
                    : {workerTaskName: WEB_WORKER_TASKS.turnOffCalculations},
                `Triggering a switch at the "${workerKey.workerName}"`)
            }}
            > Worker {workerKey.workerName} {isWorkerWorking ? <strong>ON</strong> : 'OFF'}
            </Button>
            <br/>

        </section>
    )
}

export default CalculationWorkersWorkSwitchMolecule
