import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { appReducer } from './appMobile'

// import clientsModuleReducer from '@mobtex/core-global/src/store/clients/clientsModule'

export const storeAppMobile = configureStore({
    reducer: {
        boilerplate: appReducer,
    },
})

export type RootState = ReturnType<typeof storeAppMobile.getState>
export type AppDispatch = typeof storeAppMobile.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default storeAppMobile
