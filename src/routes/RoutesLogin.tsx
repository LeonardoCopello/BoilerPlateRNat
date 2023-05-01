import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from '@screens/Unauth/Access/Login'
import { Forgot } from '@screens/Unauth/Access/Forgot'
import { AuthRoutes } from './types/RoutesLogin'
import { Home } from '@screens/Auth/Home'
import { TestPage } from '@screens/Auth/TestPage'

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
                <Screen 
                    name="Home"
                    component={Home}
                />
                <Screen 
                    name="TestPage"
                    component={TestPage}
                />
            </Navigator>
        </NavigationContainer>
    )
}