import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import appReducer from '@store/appMobile'

const storeAppMobile = configureStore({
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
