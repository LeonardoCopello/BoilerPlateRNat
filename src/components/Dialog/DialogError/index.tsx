import { Text } from 'react-native'
import React from 'react'
import { Dialog, useTheme } from '@rneui/themed'
import { DialogConfirmProps } from '@components/Dialog/types/dialogs'


export const DialogError = ( props: DialogConfirmProps) => {
    const { title, bodyText ,isVisible, labelBtnConfirm, toggleVisibility, onPressConfirm} = props

    const { theme } = useTheme()

    const DialogTitle = title ?? 'Atenção ?'
    const DialogBodyText = bodyText ?? 'Este dado não confere ?'
    const DialogLabelBtn = labelBtnConfirm ?? 'Entendi'

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
                    titleStyle={{ color: theme.colors.error }}
                    title={DialogLabelBtn}
                    onPress={handleConfirm}/>
            </Dialog.Actions>
        </Dialog>
    )
}