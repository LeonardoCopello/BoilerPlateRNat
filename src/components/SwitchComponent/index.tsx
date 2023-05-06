import { useSwitch } from '@hooks/useSwitch'
import { Switch, Text, useTheme } from '@rneui/themed'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'

interface ISwitchComponentProps {
    labelChecked: string | undefined
    labelUnChecked: string | undefined
    checked: boolean
    toggleChecked: () => void
}

export const SwitchComponent = (props: ISwitchComponentProps) => {
    const { labelChecked, labelUnChecked, toggleChecked, checked } = props

    const { theme } = useTheme()

    return (
        <View style={styles.view}>
            <Switch
                value={checked}
                onValueChange={toggleChecked}
                color={theme.colors.primary}
                thumbColor={checked ? theme.colors.primary : theme.colors.grey3}
                trackColor={{ false: theme.colors.grey4, true: theme.colors.grey4 }}
                style={{ transform: [{ scaleX: 1 }, { scaleY: 1 }] }}
            />
            <Text style={{ color: theme.colors.black }}>
                {checked ? labelChecked ?? '' : labelUnChecked ?? ''}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        marginVertical: 10,
        flexDirection: 'row',
        marginLeft: 20,
    },
})
//
