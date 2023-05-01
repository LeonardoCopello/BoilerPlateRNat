import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Dialog } from '@rneui/themed'

interface IProps {
    isVisible: boolean
    toggleVisibility: () => void
}
export const DialogBlank = ( props: IProps) => {
    const { isVisible, toggleVisibility} = props

    return (
        <Dialog
            isVisible={isVisible}
            onBackdropPress={toggleVisibility}
        >
            <Dialog.Title title="Dialog Title"/>
            <Text>Dialog body text. Add relevant information here.</Text>
        </Dialog>
    )
}