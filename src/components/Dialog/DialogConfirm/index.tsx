import { Text } from 'react-native'
import React from 'react'
import { Dialog, useTheme  } from '@rneui/themed'
import { DialogConfirmProps } from '@components/Dialog/types/dialogs'
import { BottomSheetOneBtn } from '@components/Dialog/components/BottomSheetOneBtn'

export const DialogConfirm = ( props: DialogConfirmProps) => {
    
    const { title, bodyText, isVisible, labelBtnConfirm, modalType, toggleVisibility, onPressConfirm} = props

    const { theme } = useTheme()

    const dialogTitle = title ?? 'Confirma ?'
    const dialogBodyText = bodyText ?? 'Você confirma a exclusão da imagem ?'
    const dialogLabelBtn = labelBtnConfirm ?? 'Confirmar'
    const btnColor = theme.colors.primary

    const handleConfirm = () => {
        onPressConfirm()
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
                            title={dialogLabelBtn}
                            onPress={handleConfirm}/>
                    </Dialog.Actions>
                </Dialog> )}
            { modalType === 'bottomSheet' && (
                <BottomSheetOneBtn 
                    isVisible={isVisible} 
                    btnColor={btnColor} 
                    dialogTitle={dialogTitle} 
                    dialogBodyText={dialogBodyText} 
                    dialogLabelBtn={dialogLabelBtn} 
                    toggleVisibility={toggleVisibility}
                    handleConfirm={handleConfirm} 
                />
            )}
        </>
    )
}
