import { Text } from 'react-native'
import React from 'react'
import { Dialog, useTheme } from '@rneui/themed'
import { DialogConfirmProps } from '@components/Dialog/types/dialogs'


export const DialogConfirm = ( props: DialogConfirmProps) => {
    const { title, bodyText, isVisible, labelBtnConfirm, toggleVisibility, onPressConfirm} = props

    const { theme } = useTheme()

    const DialogTitle = title ?? 'Confirma ?'
    const DialogBodyText = bodyText ?? 'Você confirma a exclusão da imagem ?'
    const DialogLabelBtn = labelBtnConfirm ?? 'Confirmar'

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
                    titleStyle={{ color: theme.colors.primary }}
                    title={DialogLabelBtn}
                    onPress={handleConfirm}/>
            </Dialog.Actions>
        </Dialog>
    )
}