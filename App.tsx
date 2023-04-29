import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import storeAppMobile from '@store/appMobile'

export const App = () => {
    console.log('teste')
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            {/* <Provider store={storeAppMobile}> */}
            <SafeAreaProvider>
                <SafeAreaView>
                    <Text>Tesgfgfg te</Text>
                </SafeAreaView>
            </SafeAreaProvider>
            {/* </Provider> */}
        </GestureHandlerRootView>
    )
}
