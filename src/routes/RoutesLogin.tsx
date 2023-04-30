import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from '@screens/Unauth/Access/Login'
import { Forgot } from '@screens/Unauth/Access/Forgot'
import { AuthRoutes } from './types/RoutesLogin'

export const RoutesLogin = () => {

    const { Navigator, Screen} = createNativeStackNavigator<AuthRoutes>()

    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen 
                    name="Login"
                    component={Login}
                />
                <Screen 
                    name="Forgot"
                    component={Forgot}
                />
            </Navigator>
        </NavigationContainer>
    )
}