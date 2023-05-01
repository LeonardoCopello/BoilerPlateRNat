import React, { useState } from 'react'
import { Dialog, Text } from '@rneui/themed'
import { IDialogProps } from '..'

type IBlankProps = Pick<IDialogProps, 'title' | 'bodyText'>

export const BlankDialog = ( props: IBlankProps ) => {
    console.log('blank Dialog')
    const [isVisible, setIsVisible] = useState(true)
    const toggleDialog = () => {
        setIsVisible(!isVisible)
    }

    return (
        <Dialog
            isVisible={isVisible}
            onBackdropPress={() => setIsVisible(false)}
        >
            <Dialog.Title title={props.title}/>
            <Text>{props.bodyText }</Text>
        </Dialog>
    )
}