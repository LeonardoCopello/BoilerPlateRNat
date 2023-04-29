import React from 'react'
import { View } from 'react-native'
import {  Button, Text } from '@rneui/themed'
import { RootState, useAppDispatch, useAppSelector } from '@store/Reducers'
import { setToggleTheme } from '@store/theme/themeApp'

export const Login = () => {
    console.log('entrou login')
    const dispatch = useAppDispatch()

    const { currentTheme } = useAppSelector(
        (state: RootState) => state.theme )
    
    const toggleTheme = () => {
        dispatch(setToggleTheme(currentTheme))
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'red'}}>
            <Button 
                title='toggle'
                buttonStyle={{ backgroundColor: currentTheme?.lightColors?.accent}} 
                onPress={toggleTheme}
            />
        </View>
    )
}