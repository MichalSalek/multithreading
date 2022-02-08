import { IWorkerKey } from '@/features/technical/web-workers-configuration/webWorkers.types'
import { fireJustClientSide } from '@/coding-utils/environmentOperations.api'



// Worker limit. Automatic set - window.navigator.hardwareConcurrency
export const MAX_WORKERS_LIMIT = fireJustClientSide<number>(() => window.navigator.hardwareConcurrency || 4) as number

// WorkerKey entity for main thread. Exceptionally - it is not a Worker :-) But using the same logic and the case is singular.
export const MAIN_THREAD_KEY: IWorkerKey = {workerName: 'mainThread'}

// Debounce freeze time for bundle actions. Check the usage to know more.
export const WAITING_TIME_FOR_BUNDLE_WORKER_ACTIONS = 390

// Debounce - Optimal for CPU usage
// Realtime - The most accurate way to receive data over time (expert mode)
export const INTERVAL_TIME_DEBOUNCING_SOCKET_MESSAGES: number | 0 = 0 // 0 means realtime

// Complexity limit. So high values can just crash the browsers (event loop overload)
export const MIN_WORKER_COMPLEXITY_POSSIBILITY = 2
export const MAX_WORKER_COMPLEXITY_POSSIBILITY = 200


// Browser storage:
//
export const STORAGE_KEY_WORKERS_AMOUNT = 'workersAmount'
export const STORAGE_KEY_CONTROL_PANEL_COLLAPSE_STATE = 'controlPanelCollapsedState'
export const STORAGE_KEY_CONTROL_PANEL_SWITCHES = 'controlPanelSwitches'
export const STORAGE_KEY_FLOATING_COMPONENT_ON_THE_SCREEN_POSITION = 'onTheScreenPosition'
