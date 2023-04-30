import { HDRightComponentProps } from '@components/HeaderDefault/types/rightComponent'
import { Button, useTheme } from '@rneui/themed'
import React from 'react'
import { View } from 'react-native'
import { rightComponentList } from '@components/HeaderDefault/components/HDRightComponent/rightComponentList'

export const HDRightComponent = (props: HDRightComponentProps) => {
    const { theme } = useTheme()
    const { iconType, isDisableRightIcon, size, onPress } = props

    const iconDetails = rightComponentList.find(item => item.type === iconType)

    return (
        <View style={{ flex: 1 }}>
            {onPress && iconDetails && (
                <Button
                    disabled={isDisableRightIcon}
                    disabledStyle={{
                        backgroundColor: 'transparent',
                    }}
                    icon={{
                        name: iconDetails.iconName,
                        type: iconDetails.iconType,
                        size: size ?? iconDetails.iconSize,
                        color: isDisableRightIcon ? theme.colors.grey4 : iconDetails.color,
                    }}
                    onPress={onPress}
                />
            )}
        </View>
    )
}
