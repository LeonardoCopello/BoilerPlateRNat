import { Text } from 'react-native'
import React from 'react'
import { Dialog, useTheme } from '@rneui/themed'
import { DialogBothBtnsProps } from '@components/Dialog/types/dialogs'


export const DialogBothBtns = ( props: DialogBothBtnsProps) => {
    const { title, bodyText ,isVisible, labelBtnConfirm, labelBtnCancel, toggleVisibility, onPressConfirm, onPressCancel} = props

    const { theme } = useTheme()

    const DialogTitle = title ?? 'Confirma ?'
    const DialogBodyText = bodyText ?? 'Você confirma a exclusão da imagem ?'
    const DialogLabelBtnConfirm = labelBtnConfirm ?? 'Sim'
    const DialogLabelBtnCancel = labelBtnCancel ?? 'Não'

    const handleConfirm = () => {
        onPressConfirm()
        toggleVisibility()
    }

    const handleCancel = () => {
        onPressCancel()
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
                    titleStyle={{ color: theme.colors.primary }}
                    title={DialogLabelBtnConfirm}
                    onPress={handleConfirm}/>
                <Dialog.Button
                    titleStyle={{ color: theme.colors.error }}
                    title={DialogLabelBtnCancel}
                    onPress={handleCancel}/>
            </Dialog.Actions>
        </Dialog>
    )
}