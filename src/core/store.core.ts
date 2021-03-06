import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { webWorkersSlice } from '@/features/background/web-workers/webWorkersSlice'
import { socketSlice } from '@/features/background/socket-client/socketSlice'
import { controlPanelSlice } from '@/features/building/control-panel/controlPanelSlice'



export function makeStore() {
    return configureStore({
        reducer: {
            calculationsWorkersSlice: webWorkersSlice.reducer,
            socketSlice: socketSlice.reducer,
            controlPanelSlice: controlPanelSlice.reducer
        }
    })
}


const store = makeStore()

// TypeScript types handling
//
export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    AppState,
    unknown,
    Action<string>>

// Redux store hooks.
// Typed.
//
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

export default store
