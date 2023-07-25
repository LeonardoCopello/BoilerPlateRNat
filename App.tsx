import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { ThemeProvider } from '@rneui/themed'
import { RootState, useAppSelector } from '@store/Reducers'
import { RoutesLogin } from '@routes/RoutesLogin'




export const App = () => {

    const { currentTheme } = useAppSelector(
        (state: RootState) => state.theme )
    // console.log('teste')

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ThemeProvider theme={currentTheme}>
                <SafeAreaProvider>
                    <RoutesLogin />
                </SafeAreaProvider>
            </ThemeProvider>
        </GestureHandlerRootView>
    )
}
