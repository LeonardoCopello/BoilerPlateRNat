import { PayloadAction } from '@reduxjs/toolkit'
import { IBoilerplateList } from '@customTypes/store/boilerplate/boilerplate'
import { IBoilerplateInitialState } from '@customTypes/store/boilerplate'

export const peopleListFromAPI = (
    state: IBoilerplateInitialState,
    action: PayloadAction<IBoilerplateList[]>,
) => {
    state.list = action.payload
}