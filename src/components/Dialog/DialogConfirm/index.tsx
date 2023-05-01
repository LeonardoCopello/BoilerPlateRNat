import { Text } from 'react-native'
import React from 'react'
import { Dialog } from '@rneui/themed'

interface IProps {
    isVisible: boolean
    onPress: () => void
    toggleVisibility: () => void
}
export const DialogConfirm = ( props: IProps) => {
    const { isVisible, toggleVisibility, onPress} = props

    const handleConfirm = () => {
        onPress()
        toggleVisibility()
    }

    return (
        <Dialog
            isVisible={isVisible}
            onBackdropPress={toggleVisibility}
        >
            <Dialog.Title title="Confirma?"/>
            <Text>Você confirma a exclusão da imagem/</Text>
            <Dialog.Actions>
                <Dialog.Button title="Confirmar" onPress={handleConfirm}/>
            </Dialog.Actions>
        </Dialog>
    )
}