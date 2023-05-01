import React from 'react'
import { Button, Text } from '@rneui/themed'
import { MainBody, MainContainer } from '@components/Containers'
import { HeaderDefault } from '@components/HeaderDefault'
import { DialogConfirm } from '@components/Dialog/DialogConfirm'
import { useVisibility } from '@hooks/useVisibility'
import { DialogError } from '@components/Dialog/DialogError'
import { DialogBothBtns } from '@components/Dialog/DialogBothBtns'

export const TestPage = () => {
    const stateConfirm = useVisibility()
    const stateError = useVisibility()
    const stateBothBtns = useVisibility()

    const onPressConfirm = () => {
        console.log('apertou confirmar')
    }

    const onPressCancel = () => {
        console.log('apertou cancelar')
    }

    return (
        <MainContainer>
            <HeaderDefault title='Home' />
            <MainBody >
                <DialogConfirm
                    title='Confirma exclusão?'
                    bodyText='Corpo do Dialog Confirm'
                    isVisible={stateConfirm.isVisible}
                    labelBtnConfirm={undefined}                
                    toggleVisibility={stateConfirm.toggleVisibility}
                    onPressConfirm={onPressConfirm} 
                />
                <DialogError
                    title='Erro'
                    bodyText='Corpo do Dialog Error'
                    isVisible={stateError.isVisible}
                    labelBtnConfirm={'Ok'}                
                    toggleVisibility={stateError.toggleVisibility}
                    onPressConfirm={onPressConfirm} 
                />
                <DialogBothBtns
                    title='Deseja fazer o que?'
                    bodyText='Corpo do Dialog Both Btns'
                    isVisible={stateBothBtns.isVisible}
                    labelBtnConfirm='Yes'
                    labelBtnCancel='No'
                    toggleVisibility={stateBothBtns.toggleVisibility}
                    onPressConfirm={onPressConfirm} 
                    onPressCancel={onPressCancel}
                />
                <Text>TestPage</Text>
            </MainBody>            
            <Button 
                title="Dialog Confirm"
                containerStyle={{ marginBottom: 20}}
                onPress={stateConfirm.toggleVisibility}
            />
            <Button 
                title="Dialog Error"
                containerStyle={{ marginBottom: 20}}
                onPress={stateError.toggleVisibility}
            />
            <Button 
                title="Dialog Both Btns"
                containerStyle={{ marginBottom: 20}}
                onPress={stateBothBtns.toggleVisibility}
            />
        </MainContainer>
    )
}