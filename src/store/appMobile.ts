import { createSlice } from '@reduxjs/toolkit'
import { IBoilerplateInitialState } from '@customTypes/store/boilerplate'
import { peopleListFromAPI } from '@store/boilerplate/people'


export const boilerplateInitialState: IBoilerplateInitialState = {
    list: [],
}


export const appReducer = createSlice({
    name: 'boilerplate',
    initialState: boilerplateInitialState,
    reducers: {
        setPeopleList: peopleListFromAPI,
    },
})

export const {
    setPeopleList,
} = appReducer.actions

export default appReducer.reducer
