import { ImageItem } from '@components/img/ImageItem'
import { Text } from '@rneui/themed'
import React from 'react'
import { View } from 'react-native'

interface HDCenterComponentProps {
  title?: string
  centerComponentImageUrl?: string
}

export const HDCenterComponent = (props: HDCenterComponentProps) => {
    const { title, centerComponentImageUrl } = props

    return (
        <View style={{ flex: 3, alignItems: 'center' }}>
            {centerComponentImageUrl ? (
                <ImageItem
                    imageUrl={centerComponentImageUrl}
                    imgHeight={40}
                    calculateAspectRatio
                    disableModalImage
                />
            ) : (
                <Text style={{ color: '#fff', fontSize: 18 }}>{title}</Text>
            )}
        </View>
    )
}
