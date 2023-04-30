// import { useCustomNavigation } from '@mobtex/core-mobile/src/hooks/useCustomNavigation'
import { defaultValues } from '@components/HeaderDefault/helpers/defaultComponent'
import { HDLeftComponentProps, leftComponentItem } from '@components/HeaderDefault/types/leftComponent'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { Button, useTheme } from '@rneui/themed'
import React from 'react'
import { View } from 'react-native'

export const HDLeftComponent = (props: HDLeftComponentProps) => {
    const navigation = useNavigation()
    const openDrawer = () => navigation.dispatch(DrawerActions.openDrawer)
    
    const { theme } = useTheme()
    const { iconType, isDisableLeftIcon, size } = props

    // const { goBack, openDrawer } = useCustomNavigation()

    const leftComponentList: leftComponentItem[] = [
        {
            ...defaultValues,
            type: 'default',
            iconName: 'arrow-left',
            onPress: navigation.goBack,
        },
        {
            ...defaultValues,
            type: 'drawer',
            iconName: 'menu',
            onPress: openDrawer,
        },
    ]

    const iconDetails =
    leftComponentList.find(item => item.type === iconType) ??
    leftComponentList[0]

    return (
        <View style={{ flex: 1 }}>
            <Button
                disabled={isDisableLeftIcon}
                disabledStyle={{
                    backgroundColor: 'transparent',
                }}
                icon={{
                    name: iconDetails.iconName,
                    type: iconDetails.iconType,
                    size: size ?? iconDetails.iconSize,
                    color: isDisableLeftIcon ? theme.colors.grey4 : iconDetails.color,
                }}
                onPress={iconDetails.onPress}
            />
        </View>
    )
}
