import React, { useState } from 'react'
import { Button, Text } from '@rneui/themed'
// import { BlankDialog } from './DialogTypes/BlankDialog'
import { BlankDialog } from '@components/DialogGlobal/DialogTypes/BlankDialog'

interface IDialogGlobalProps {
    type: 'onlyText' | 'singleBtn'
    title: string
    bodyText: string
    onConfirm?: () => void
    onCancel?: () => void
}

type IBlankProps = Pick<IDialogGlobalProps, 'type' | 'title' | 'bodyText'>
type ISingleBtnProps = Pick<IDialogGlobalProps, 'type' | 'title' | 'bodyText' | 'onConfirm'>

type DialogProps<T> = {
    [P in keyof T]: T[P]
    // type: 'onlyText' | 'singleBtn'
    // title: string
    // bodyText: string
    // onConfirm?: () => void
    // onCancel?: () => void
}

const teste = {

}


// type IDialogGlobalProps = IBlankProps | ISingleBtnProps

type MyMappedType<T> = {
    [P in keyof T]: T[P]
}
type MyNewType = MyMappedType<IDialogProps>

type Pick1<T, Properties extends keyof T> = {
    [P in Properties]: T[P]
}

type MyNewType2 = Pick<IDialogProps, 'type' | 'title' | 'bodyText'> 

// type IDialogGlobalProps = Partial<IDialogProps>

export function DialogGlobal<T>( props : DialogProps<T>) {
    console.log('blank DialogGlobal')

    
    const chooseDialog = () => {
        switch(props.type) {
        case ('onlyText'):
            return <BlankDialog {...props}/>
        case ('singleBtn'):
            return <Text>doubleBtn</Text>
        }
    }


    return (
        <>
            {chooseDialog()}
        </>
    )
}