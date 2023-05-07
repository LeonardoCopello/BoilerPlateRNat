import React from 'react'
import { BottomSheet, Button, ListItem, useTheme } from '@rneui/themed'
import { Dimensions, StyleSheet, View } from 'react-native'
import { BottomSheetBothBtnsProps } from '@components/Dialog/types/dialogs'

const { width, height } = Dimensions.get('window')

export const BottomSheetBothBtns = (props: BottomSheetBothBtnsProps) => {
    const { isVisible, toggleVisibility, btnColor, btnCancelColor, dialogTitle, dialogBodyText, handleConfirm, dialogLabelBtn, dialogLabelBtnCancel, handleCancel } = props
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
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%'}}>
                        <Button
                            color={btnCancelColor}
                            titleStyle={{ color: theme.colors.white }}
                            buttonStyle={{ width: width * 0.30, borderRadius: 10 }}
                            title={dialogLabelBtnCancel}
                            onPress={handleCancel}/>
                        <Button
                            color={btnColor}
                            titleStyle={{ color: theme.colors.white }}
                            buttonStyle={{ width: width * 0.30, borderRadius: 10 }}
                            title={dialogLabelBtn}
                            onPress={handleConfirm}/>
                    </View>
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