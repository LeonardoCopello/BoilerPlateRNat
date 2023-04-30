import { useTheme } from '@rneui/themed'
import React, { useEffect } from 'react'
import { View } from 'react-native'
import { HDLeftComponent } from '@components/HeaderDefault/components/HDLeftComponent'
import { HeaderDefaultProps } from '@components/HeaderDefault/types'
import { HDCenterComponent } from '@components/HeaderDefault/components/HDCenterComponent'
import { HDRightComponent } from '@components/HeaderDefault/components/HDRightComponent'
import FastImage from 'react-native-fast-image'

// import FastImage from 'react-native-fast-image'

export const HeaderDefault = (props: HeaderDefaultProps) => {
    const { theme } = useTheme()
    const { title, centerComponentImageUrl, leftComponent, rightComponent } =
    props

    useEffect(() => {
        if (centerComponentImageUrl) {
            FastImage.preload([
                {
                    uri: centerComponentImageUrl,
                    headers: { Authorization: 'someAuthToken' },
                },
            ])
        }
    }, [centerComponentImageUrl])

    if (props.wasLoggedOut) {
        return <></>
    }

    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: theme.colors.primary,
                height: 70,
            }}>
            <HDLeftComponent
                {...leftComponent}
                iconType={leftComponent?.iconType ?? 'default'}
            />
            
            <HDCenterComponent
                title={title}
                centerComponentImageUrl={centerComponentImageUrl}
            />

            <HDRightComponent
                {...rightComponent}
                iconType={rightComponent?.iconType ?? 'refresh'}
            />
        </View>
    )
}
