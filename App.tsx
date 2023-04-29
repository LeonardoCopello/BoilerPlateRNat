import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { ThemeProvider, Button } from '@rneui/themed'
import { RootState, useAppDispatch, useAppSelector } from '@store/Reducers'
import { setToggleTheme } from '@store/theme/themeApp'




export const App = () => {
    const dispatch = useAppDispatch()

    const { currentTheme } = useAppSelector(
        (state: RootState) => state.theme )
    
    const toggleTheme = () => {
        dispatch(setToggleTheme(currentTheme))
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ThemeProvider theme={currentTheme}>
                <SafeAreaProvider>
                    <SafeAreaView>                        
                        <Button 
                            title='toggle'
                            buttonStyle={{ backgroundColor: currentTheme?.lightColors?.accent}} 
                            onPress={toggleTheme}
                        />
                        <Button title='teste' buttonStyle={{ backgroundColor: currentTheme?.lightColors?.primary}}/>
                        <Button 
                            title='mode'
                            buttonStyle={{ backgroundColor: currentTheme?.lightColors?.accent}} 
                        />
                        <Button title='teste' buttonStyle={{ backgroundColor: currentTheme?.lightColors?.grey0}}/>

                    </SafeAreaView>
                </SafeAreaProvider>
            </ThemeProvider>
            {/* </Provider> */}
        </GestureHandlerRootView>
    )
}
