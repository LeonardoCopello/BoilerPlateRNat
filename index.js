/**

 * @format

 */
import React from 'react'
import {AppRegistry} from 'react-native'
import { App } from './App'
import {name as appName} from './app.json'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import storeAppMobile from '@store/Reducers'

AppRegistry.registerComponent(appName, () => App)

const RNApp = function () {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Provider store={storeAppMobile}>
                <App />
            </Provider>
        </GestureHandlerRootView>
    )
}
  
AppRegistry.registerComponent(appName, () => RNApp)
  
