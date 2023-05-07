import { Text } from 'react-native'
import React from 'react'
import { Dialog, useTheme } from '@rneui/themed'
import { DialogBothBtnsProps } from '@components/Dialog/types/dialogs'
import { BottomSheetBothBtns } from '@components/Dialog/components/BottomSheetBothBtns'


export const DialogBothBtns = ( props: DialogBothBtnsProps) => {
    const { title, bodyText ,isVisible, labelBtnConfirm, labelBtnCancel, modalType, toggleVisibility, onPressConfirm, onPressCancel} = props

    const { theme } = useTheme()

    const dialogTitle = title ?? 'Confirma ?'
    const dialogBodyText = bodyText ?? 'Você confirma a exclusão da imagem ?'
    const dialogLabelBtnConfirm = labelBtnConfirm ?? 'Sim'
    const dialogLabelBtnCancel = labelBtnCancel ?? 'Não'
    const btnColor = theme.colors.primary
    const btnCancelColor = theme.colors.error


    const handleConfirm = () => {
        onPressConfirm()
        toggleVisibility()
    }

    const handleCancel = () => {
        onPressCancel()
        toggleVisibility()
    }
    return (
        <>
            { modalType === 'dialog' && (
                <Dialog
                    isVisible={isVisible}
                    onBackdropPress={toggleVisibility}
                >
                    <Dialog.Title title={dialogTitle}/>
                    <Text>{dialogBodyText}</Text>
                    <Dialog.Actions>
                        <Dialog.Button
                            titleStyle={{ color: theme.colors.primary }}
                            title={dialogLabelBtnConfirm}
                            onPress={handleConfirm}/>
                        <Dialog.Button
                            titleStyle={{ color: theme.colors.error }}
                            title={dialogLabelBtnCancel}
                            onPress={handleCancel}/>
                    </Dialog.Actions>
                </Dialog>
            )}
            { modalType === 'bottomSheet' && (
                <BottomSheetBothBtns
                    isVisible={isVisible}
                    btnColor={btnColor}
                    dialogTitle={dialogTitle}
                    dialogBodyText={dialogBodyText}
                    dialogLabelBtn={dialogLabelBtnConfirm}
                    toggleVisibility={toggleVisibility}
                    handleConfirm={handleConfirm} 
                    btnCancelColor={btnCancelColor} 
                    dialogLabelBtnCancel={dialogLabelBtnCancel} 
                    handleCancel={handleCancel}
                />
            )}
        </>
    )
}