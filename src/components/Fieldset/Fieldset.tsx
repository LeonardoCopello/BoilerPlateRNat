import { Card } from '@rneui/themed'
import React from 'react'
import { ViewStyle } from 'react-native'

interface Props {
  title?: string
  children?: React.ReactNode
  cardCustomStyle?: ViewStyle
}

export const Fieldset = ({ title, children, cardCustomStyle }: Props) => {
    return (
        <Card containerStyle={cardCustomStyle}>
            {title && <Card.Title style={{ fontSize: 18 }}>{title}</Card.Title>}

            <Card.Divider />

            {children}
        </Card>
    )
}
