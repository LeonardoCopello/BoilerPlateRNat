import React from 'react'
import { View } from 'react-native'
import {  Button, Text } from '@rneui/themed'
import { RootState, useAppDispatch, useAppSelector } from '@store/Reducers'
import { setToggleTheme } from '@store/theme/themeApp'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '@routes/types/RoutesLogin'
import { HeaderDefault } from '@components/HeaderDefault'
import { MainContainer } from '@components/Containers'

export const Login = () => {
    const navigation = useNavigation<AuthNavigatorRoutesProps>()

    const dispatch = useAppDispatch()

    const { currentTheme } = useAppSelector(
        (state: RootState) => state.theme )
    
    const toggleTheme = () => {
        dispatch(setToggleTheme(currentTheme))
    }
    const handleNavigate = () => {
        navigation.navigate('Forgot', { userLogin: 'Leo'})
    }
    return (
        <MainContainer>
            <HeaderDefault
                title={'Login'}
                leftComponent={{ iconType: 'drawer' }}
                rightComponent={{ iconType: 'refresh', onPress: handleNavigate }}
            />
            <View style={{ flex: 1 }}>
                <Button 
                    title='toggle Theme'
                    buttonStyle={{ backgroundColor: currentTheme.lightColors.accent}} 
                    onPress={toggleTheme}
                />
                <Button 
                    title='toggle Theme'
                    buttonStyle={{ backgroundColor: currentTheme.lightColors.primary}} 
                    onPress={handleNavigate}
                />
            </View>
        </MainContainer>
    )
}