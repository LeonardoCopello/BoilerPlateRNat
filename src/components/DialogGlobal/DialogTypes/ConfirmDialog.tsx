import React from 'react'
import { Dialog, Text } from '@rneui/themed'

interface IProps {
    isVisible: boolean
    setIsVisible: any
}

export const BlankDialog = ( { isVisible, setIsVisible }: IProps ) => {
    const toggleDialog = () => {
        setIsVisible(!isVisible)
    }

    return (
        <Dialog
            isVisible={isVisible}
            onBackdropPress={toggleDialog}
        >
            <Dialog.Title title="Dialog Title"/>
            <Text>Dialog body text. Add relevant information here.</Text>
        </Dialog>
    )
}