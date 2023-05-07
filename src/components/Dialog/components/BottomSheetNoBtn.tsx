import React from 'react'
import { BottomSheet, ListItem, useTheme } from '@rneui/themed'
import { Dimensions, StyleSheet } from 'react-native'
import { BottomSheetNoBtnProps } from '@components/Dialog/types/dialogs'

export const BottomSheetNoBtn = (props: BottomSheetNoBtnProps) => {
    const { isVisible, toggleVisibility, dialogTitle, dialogBodyText } = props
    const { theme } = useTheme()

    return (
        <BottomSheet 
            isVisible={isVisible}
            onBackdropPress={toggleVisibility}
        >
            <ListItem containerStyle={styles.containerItem}>
                <ListItem.Content style={{ alignItems: 'center'}}>
                    <ListItem.Title style={styles.title}>{dialogTitle}</ListItem.Title>
                    <ListItem.Subtitle style={styles.subTitle}>{dialogBodyText}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        </BottomSheet>
    )
}

const styles = StyleSheet.create({
    containerItem: { borderTopLeftRadius: 25, borderTopRightRadius: 25 },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: 16,
        marginBottom: 10
    }
})