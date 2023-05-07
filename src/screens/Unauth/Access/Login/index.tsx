import React, { useState } from 'react'
import { View } from 'react-native'
import { yupResolver } from '@hookform/resolvers/yup'
import {  Button, Text } from '@rneui/themed'
import { RootState, useAppDispatch, useAppSelector } from '@store/Reducers'
import { setToggleTheme } from '@store/theme/themeApp'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '@routes/types/RoutesLogin'
import { HeaderDefault } from '@components/HeaderDefault'
import { MainBody, MainContainer } from '@components/Containers'
import { InputTextForm } from '@components/InputText/InputTextForm'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Fieldset } from '@components/Fieldset/Fieldset'
import { DialogGlobal } from '@components/DialogGlobal'
import { SwitchComponent } from '@components/SwitchComponent'
import { useSwitch } from '@hooks/useSwitch'
import { LoginSchema } from '@services/yup/loginSchema'
import { BoilerplateModule } from '@util/Module'
import { ICONS } from '@constants/icons'


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
        resolver: yupResolver(LoginSchema),
    })

    const navigation = useNavigation<AuthNavigatorRoutesProps>()
    
    const dispatch = useAppDispatch()
    
    const { currentTheme } = useAppSelector(
        (state: RootState) => state.theme )
        
    const toggleTheme = () => {
        dispatch(setToggleTheme(currentTheme))
    }
    const toggleActivity = () => {
        if (checked) console.log('ativo')
        if (!checked) console.log('inativo')
        console.log('checked', checked)
    }
    const { checked, toggleChecked } = useSwitch({onToggle: toggleActivity })

    const handleNavigateForgot = () => {
        navigation.navigate('Forgot', { userLogin: 'Leo'})
    }
    const handleNavigateHome = () => {
        navigation.navigate('Home')
    }
    // const props = { type: 'onlyText', title: 'title', bodyText: 'Body'}

    return (
        <MainContainer>
            <HeaderDefault
                leftComponent={{ iconType: 'drawer' }}
                title={'Login'}
                // rightComponent={{ }}
            />
            <MainBody>
                <Fieldset title={BoilerplateModule.moduleLoginMainTitle} >
                    <InputTextForm
                        errors={errors}
                        control={control}
                        name="userName"
                        label="Usuário"
                        disabled={false}
                        // CustomIcon={{ ...ICONS.iconCalendar }}
                        trim
                    />
                    <InputTextForm
                        errors={errors}
                        control={control}
                        name="password"
                        label="Senha"
                        disabled={false}
                        trim
                        secureTextEntry
                        // CustomIcon={{ ...ICONS.iconCalendar }}

                    />
                    <Button 
                        containerStyle={{ marginBottom: 20}}
                        title='Entrar'
                        buttonStyle={{ backgroundColor: currentTheme.lightColors.primary}} 
                        onPress={handleSubmit(handleNavigateHome)}
                    />
            
                    <SwitchComponent
                        labelChecked={'Ativo'}
                        labelUnChecked={'Inativo'} 
                        checked={checked}
                        toggleChecked={toggleChecked}
                    />
                    {/* <DialogGlobal  {...props}/> */}
                    <View style={{ flex: 1 }}>
                        <Button
                            containerStyle={{ marginBottom: 20}}
                            title='toggle Theme'
                            buttonStyle={{ backgroundColor: currentTheme.lightColors.accent}} 
                            onPress={toggleTheme}
                        />
                        <Button 
                            containerStyle={{ marginBottom: 20}}
                            title='Go to Forgot'
                            buttonStyle={{ backgroundColor: currentTheme.lightColors.primary}} 
                            onPress={handleNavigateForgot}
                        />
                    </View>
                    <Button 
                        title="Home Page"
                        containerStyle={{ marginBottom: 20}}
                        onPress={() => navigation.navigate('Home')}
                    />
                    <Button 
                        title="Test Page"
                        containerStyle={{ marginBottom: 20}}
                        onPress={() => navigation.navigate('TestPage')}
                    />

                </Fieldset>

            </MainBody>
        </MainContainer>
    )
}