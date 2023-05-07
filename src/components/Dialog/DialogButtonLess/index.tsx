import { Text } from 'react-native'
import React from 'react'
import { Dialog } from '@rneui/themed'
import { DialogButtonLessProps } from '@components/Dialog/types/dialogs'
import { BottomSheetNoBtn } from '@components/Dialog/components/BottomSheetNoBtn'


export const DialogButtonLess = ( props: DialogButtonLessProps) => {
    const { title, bodyText ,isVisible, modalType, toggleVisibility } = props

    const dialogTitle = title ?? 'Atenção ?'
    const dialogBodyText = bodyText ?? 'Você não pode realizar esta ação ?'

    return (
        <>
            { modalType === 'dialog' && (
                <Dialog
                    isVisible={isVisible}
                    onBackdropPress={toggleVisibility}
                >
                    <Dialog.Title title={dialogTitle}/>
                    <Text>{dialogBodyText}</Text>
                </Dialog>
            )}
            {modalType === 'bottomSheet' && (
                <BottomSheetNoBtn 
                    isVisible={isVisible} 
                    dialogTitle={dialogTitle} 
                    dialogBodyText={dialogBodyText} 
                    toggleVisibility={toggleVisibility}
                />
            )}
        
        </>
    )
}