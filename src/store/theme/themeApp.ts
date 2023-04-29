// import { light } from './../../themes/light';
import { light } from '@themes/light'

import { createSlice } from '@reduxjs/toolkit'
import { IThemeInitialState } from '@customTypes/store/themeApp'
import { toggleTheme } from '@store/theme/reducers'

export const themeInitialState: IThemeInitialState = {
    currentTheme: light,
}

export const themeApp = createSlice({
    name: 'themeApp',
    initialState: themeInitialState,
    reducers: {
        setToggleTheme: toggleTheme,
    },
})

export const {
    setToggleTheme,
} = themeApp.actions

export default themeApp.reducer
