import { Switch, Text, useTheme } from '@rneui/themed'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'

interface ISwitchComponentProps {
    labelChecked: string | undefined
    labelUnChecked: string | undefined
    checked: boolean
    setChecked: React.Dispatch<React.SetStateAction<boolean>>
    onToggle?: () => void
}

export const SwitchComponent = (props: ISwitchComponentProps) => {
    const { labelChecked, labelUnChecked, checked, setChecked, onToggle} = props

    const { theme } = useTheme()
    const [triggerUpdate, setTriggerUpdate] = useState(0)

    const toggleSwitch = () => {
        setChecked(!checked)
        setTriggerUpdate(prev => prev + 1)
    }
    useEffect(() => {
        if (triggerUpdate > 0) {
            // vai impedir a execução na primeira renderização
            if (onToggle) {
                onToggle()
            }
        }
    }, [triggerUpdate])



    return (
        <View style={styles.view}>
            <Switch
                value={checked}
                onValueChange={prev => {
                    console.log('PREVIOUS >>> ', prev)
                    toggleSwitch()
                }}
                color={theme.colors.primary}
                thumbColor={checked ? theme.colors.primary : theme.colors.grey3}
                trackColor={{ false: theme.colors.grey4, true: theme.colors.grey4 }}
                style={{ transform: [{ scaleX: 1 }, { scaleY: 1 }] }}
            />
            <Text style={{ color: theme.colors.black }}>
                {checked ? labelChecked ?? '' : labelUnChecked ?? 'Inativo'}
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
