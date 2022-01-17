import { UnknownFunctionType } from '@/core/types.core'
import { IWorkerKey } from '@/features/workers/workers.types'
////////////////////////////////////////////////////////////
//
// Here you can addOne a global and generic utilities
//
// Remember about make a functions fully declarative in a use
// with a single responsibility
//
// * BE CAREFUL ABOUT MODIFY A GENERIC FUNCTIONS WITH A GLOBAL USAGE *
//
///////////////////////////////////////////////////////////


// This little shell allows run some functions,
// e.g. console communicates only during development
// to monitor an app life.
//
export const runInDevEnvOnly = <D>(developmentEnvCallback: UnknownFunctionType<undefined, D>): D | boolean =>
    IS_ENABLED_DEV_ONLY_FN_CALLS && process.env.NODE_ENV === 'development' && developmentEnvCallback()


// Server Side Rendering guard for browser global objects access while Next.js making a build.
//
export const fireJustClientSide = <D>(justClientSideCallback: UnknownFunctionType<undefined, D>, tryingToAdditionalEcho = ''): D | boolean => {
    tryingToAdditionalEcho && runInDevEnvOnly(() => console.log(`[Trying to -> ${tryingToAdditionalEcho}]`))
    if (!(typeof window === 'undefined' && !process.browser)) {
        const execution = justClientSideCallback()
        return isUndefinedType(execution) ? true : execution
    } else {
        tryingToAdditionalEcho && runInDevEnvOnly(() => console.log(`[Failed -> ${tryingToAdditionalEcho}] - Probably server side.`))
        return false
    }
}


// Shorthand for undefined type check.
// DON'T WORKS WITH GUARD STATEMENTS - use then conventional notation (typeof) or optional?.chaining - TypeScript purposes
//
export const isUndefinedType = (somethingToCheck: unknown | undefined): boolean => typeof somethingToCheck === 'undefined'



//
///
/// CONSTANTS SECTION
///
//

// Dev debug flag
export const IS_ENABLED_DEV_ONLY_FN_CALLS = true

// Worker limit. Automatic set - window.navigator.hardwareConcurrency
export const MAX_WORKERS_LIMIT = fireJustClientSide<number>(() => window.navigator.hardwareConcurrency || 4) as number

// WorkerKey entity for main thread. Exceptionally - it is not a Worker :-) But using the same logic and the case is singular.
export const MAIN_THREAD_KEY: IWorkerKey = {workerName: 'mainThread'}

// Browser storage key name
export const STORAGE_WORKERS_AMOUNT_KEY = 'workersAmount'

// Debounce freeze time for bundle actions. Check the usage to know more.
export const WAITING_TIME_FOR_BUNDLE_WORKER_ACTIONS = 390

// Debounce - Optimal for CPU usage
// Realtime - The most accurate way to receive data over time (expert mode)
export const INTERVAL_TIME_DEBOUNCING_SOCKET_MESSAGES: number | 0 = 0 // 0 means realtime