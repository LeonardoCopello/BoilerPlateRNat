import React from 'react'
import { View } from 'react-native'
import {  Button, Text } from '@rneui/themed'
import { RootState, useAppDispatch, useAppSelector } from '@store/Reducers'
import { setToggleTheme } from '@store/theme/themeApp'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '@routes/types/RoutesLogin'
import { HeaderDefault } from '@components/HeaderDefault'
import { MainContainer } from '@components/Containers'
import { InputTextForm } from '@components/InputText/InputTextForm'
import { SubmitHandler, useForm } from 'react-hook-form'


export const Login = () => {

    interface ILoginPros {
        userName: string,
        password: string
    }

    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<ILoginPros>({
        defaultValues: {
        //   year: '2023'.toString(),
        },
        // resolver: yupResolver(CertificateItemsSchema),
    })

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
            <InputTextForm
                errors={errors}
                control={control}
                name="userName"
                label="Usuário"
                disabled={false}
                trim
            />
            <InputTextForm
                errors={errors}
                control={control}
                name="password"
                label="Senha"
                disabled={false}
                trim
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