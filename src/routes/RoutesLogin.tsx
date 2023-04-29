import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from '@screens/Unauth/Access/Login'

export const RoutesLogin = () => {

    const Stack = createNativeStackNavigator()
    console.log('entrou Routes')

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Login"
                    component={Login}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}