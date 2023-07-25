import React from 'react'
import { Text } from '@rneui/themed'
import { TouchableOpacity } from 'react-native'

interface IProps {
    onPress: () => void
    label: string
}
export  const ButtonWalkThrough = (props: IProps) => {
    const { onPress, label  } = props
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#0F9347'}}>{label}</Text>
        </TouchableOpacity>
    )
}

export  const ButtonSkip = (props: IProps) => {
    const { onPress, label } = props

    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={{ fontSize: 15, color: '#0F9347'}}>{label}</Text>
        </TouchableOpacity>
    )
}