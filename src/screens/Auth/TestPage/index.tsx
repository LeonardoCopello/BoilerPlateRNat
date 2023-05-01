import React from 'react'
import { Button, Text } from '@rneui/themed'
import { MainBody, MainContainer } from '@components/Containers'
import { HeaderDefault } from '@components/HeaderDefault'
import { DialogConfirm } from '@components/Dialog/DialogConfirm'
import { useVisibility } from '@hooks/useVisibility'

export const TestPage = () => {

    const { isVisible, toggleVisibility } = useVisibility()

    const onPress = () => {
        console.log('apertou confirmar')
    }

    return (
        <MainContainer>
            <HeaderDefault title='Home' />
            <MainBody >
                
                <DialogConfirm 
                    isVisible={isVisible}
                    toggleVisibility={toggleVisibility} 
                    onPress={onPress}
                />
                <Text>TestPage</Text>
            </MainBody>            
            <Button 
                title="Test Page"
                containerStyle={{ marginBottom: 20}}
                onPress={toggleVisibility}
            />
        </MainContainer>
    )
}