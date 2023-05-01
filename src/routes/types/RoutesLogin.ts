// //Props for Stack Navigator
// import { RouteProp } from '@react-navigation/native'

// export type LoginStackParamList = {
//   Login: undefined
//   Forgot: { userLogin: string }
// }

// //Props for useRoute
// export type LoginRouteProp<
//   RouteName extends keyof LoginStackParamList,
// > = RouteProp<LoginStackParamList, RouteName>

import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type AuthRoutes = {
    Login: undefined
    Forgot: { userLogin: string }
    Home: undefined
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>
