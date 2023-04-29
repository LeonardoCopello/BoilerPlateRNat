import React, { useState } from 'react'
import { SafeAreaView, Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import storeAppMobile from '@store/appMobile'
import { ThemeProvider, createTheme, Button, useThemeMode } from '@rneui/themed'
import { light, dark } from '@themes/light'




export const App = () => {
    const { mode, setMode } = useThemeMode()
    const [ theme, setTheme ] = useState(light)

    const toggleTheme = () => {
        if (theme === light) {
            setTheme(dark)
        } else {
            setTheme(light)
        }
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            {/* <Provider store={storeAppMobile}> */}
            <ThemeProvider theme={theme}>
                <SafeAreaProvider>
                    <SafeAreaView>                        
                        <Button 
                            title='toggle'
                            // containerStyle={{ height: 200 }}
                            buttonStyle={{ backgroundColor: theme.lightColors?.accent}} 
                            onPress={toggleTheme}
                        />


                        <Button title='teste' buttonStyle={{ backgroundColor: theme.lightColors?.primary}}/>
                        <Button 
                            title='mode'
                            // containerStyle={{ height: 200 }}
                            buttonStyle={{ backgroundColor: theme.lightColors?.accent}} 
                            // onPress={() => setMode('light')}
                        />
                        <Button title='teste' buttonStyle={{ backgroundColor: theme.lightColors?.grey0}}/>

                    </SafeAreaView>
                </SafeAreaProvider>
            </ThemeProvider>
            {/* </Provider> */}
        </GestureHandlerRootView>
    )
}
