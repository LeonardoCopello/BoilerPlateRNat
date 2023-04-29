import { IThemeInitialState } from '@customTypes/store/themeApp'
import { PayloadAction } from '@reduxjs/toolkit'
import { CreateThemeOptions } from '@rneui/themed'
import { dark } from '@themes/dark'
import { light } from '@themes/light'

export const toggleTheme = (
    state: IThemeInitialState,
    action: PayloadAction<CreateThemeOptions>,
) => {
    if (action.payload === light) {
        state.currentTheme = dark
    } else {
        state.currentTheme = light
    }
}