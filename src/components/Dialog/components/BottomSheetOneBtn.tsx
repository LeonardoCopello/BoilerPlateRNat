import React from 'react'
import { BottomSheet, Button, ListItem, useTheme } from '@rneui/themed'
import { Dimensions, StyleSheet } from 'react-native'
import { BottomSheetOneBtnProps } from '@components/Dialog/types/dialogs'

const { width, height } = Dimensions.get('window')

export const BottomSheetOneBtn = (props: BottomSheetOneBtnProps) => {
    const { isVisible, toggleVisibility, btnColor, dialogTitle, dialogBodyText, handleConfirm, dialogLabelBtn } = props
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
                    <Button
                        color={btnColor}
                        titleStyle={{ color: theme.colors.white }}
                        buttonStyle={{ width: width * 0.9, borderRadius: 10 }}
                        title={dialogLabelBtn}
                        onPress={handleConfirm}/>
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