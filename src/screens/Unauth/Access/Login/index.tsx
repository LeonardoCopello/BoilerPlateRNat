import React, { useState } from 'react'
import { View } from 'react-native'
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
    const [checked, setChecked] = useState(false)

    const { currentTheme } = useAppSelector(
        (state: RootState) => state.theme )
    
    const toggleTheme = () => {
        dispatch(setToggleTheme(currentTheme))
    }
    const handleNavigate = () => {
        navigation.navigate('Forgot', { userLogin: 'Leo'})
    }
    // const props = { type: 'onlyText', title: 'title', bodyText: 'Body'}

    return (
        <MainContainer>
            <HeaderDefault
                title={'Login'}
                // rightComponent={{ }}
            />
            <MainBody>
                <Fieldset title='Login' >
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
            
                    <SwitchComponent 
                        labelChecked={'Light'}
                        labelUnChecked={'Dark'}
                        checked={checked} 
                        setChecked={setChecked} 
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
                            onPress={handleNavigate}
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