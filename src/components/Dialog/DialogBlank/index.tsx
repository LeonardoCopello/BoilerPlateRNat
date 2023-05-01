import { Text } from 'react-native'
import React from 'react'
import { Dialog, useTheme } from '@rneui/themed'
import { DialogConfirmProps } from '@components/Dialog/types/dialogs'


export const DialogConfirm = ( props: DialogConfirmProps) => {
    const { title, bodyText ,isVisible, toggleVisibility, onPressConfirm} = props

    const { theme } = useTheme()

    const DialogTitle = title ?? 'Atenção ?'
    const DialogBodyText = bodyText ?? 'Você não pode realizar esta ação ?'

    const handleConfirm = () => {
        onPressConfirm()
        toggleVisibility()
    }

    return (
        <Dialog
            isVisible={isVisible}
            onBackdropPress={toggleVisibility}
        >
            <Dialog.Title title={DialogTitle}/>
            <Text>{DialogBodyText}</Text>
            <Dialog.Actions>
                <Dialog.Button
                    color={theme.colors.error}
                    title=""
                    onPress={handleConfirm}/>
            </Dialog.Actions>
        </Dialog>
    )
}