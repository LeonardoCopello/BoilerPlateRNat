import React, { useEffect } from 'react'
import { Button, Text } from '@rneui/themed'
import { MainBody, MainContainer } from '@components/Containers'
import { HeaderDefault } from '@components/HeaderDefault'
import { DialogConfirm } from '@components/Dialog/DialogConfirm'
import { useVisibility } from '@hooks/useVisibility'
import { DialogError } from '@components/Dialog/DialogError'
import { useImagePicker } from '@hooks/useImagePicker'
import { useFilePicker } from '@hooks/useFilePicker'
import { Image } from 'react-native'

export const TestPage = () => {
    const stateConfirm = useVisibility()
    const stateError = useVisibility()
    const stateBothBtns = useVisibility()
    const stateImagePicker  = useVisibility()
    // const { } = useImagePicker({multiple: false , resizeImage: false, frontCamera: false})
    const filePicker  = useFilePicker({ isMultipleSelection: true, permittedTypes: ['allFiles', 'image']})
    const imagePicker = useImagePicker({ useFrontCamera: false, height: 300, width: 100 ,media: { mediaType: 'photo', canCrop: true }, compressQuality: 0.2 })
    

    const onPressConfirm = () => {
        console.log('apertou confirmar')
    }

    const onPressCancel = () => {
        console.log('apertou cancelar')
    }
    useEffect(() => {
        console.log('imagePicker.selectedImage.path >>>>>>>>', imagePicker.selectedImage.path)
    },[imagePicker.selectedImage])

    return (
        <MainContainer>
            <HeaderDefault title='Home' />
            {/* { imagePicker.selectedImage.path !== undefined && ( */}
            {/* <Image source={{uri: imagePicker.base64DataFile}} style={{ width: 200, height: 200}}/> */}
            {/* )} */}
            {/* <Image source={require('../../../assets/img/placeholder.jpg')} style={{ width: 200, height: 500}} resizeMode='contain'/> */}

            <MainBody >
                { imagePicker.selectedImage.path !== null && <Image source={{uri: imagePicker.selectedImage.path}} style={{ width: 200, height: 700}} resizeMode='contain'/>}
                <DialogConfirm
                    title='Confirma exclusão?'
                    bodyText='Corpo do Dialog Confirm'
                    isVisible={stateConfirm.isVisible}
                    labelBtnConfirm={undefined}                
                    toggleVisibility={stateConfirm.toggleVisibility}
                    onPressConfirm={onPressConfirm} 
                />
                <DialogError
                    title='Erro'
                    bodyText='Corpo do Dialog Error'
                    isVisible={stateError.isVisible}
                    labelBtnConfirm={'Ok'}                
                    toggleVisibility={stateError.toggleVisibility}
                    onPressConfirm={onPressConfirm} 
                />
                <filePicker.BottomSheetFilePicker />
               
            </MainBody>            
            <Button 
                title="Dialog Confirm"
                containerStyle={{ marginBottom: 20}}
                onPress={stateConfirm.toggleVisibility}
            />
            <Button 
                title="Pick File"
                containerStyle={{ marginBottom: 20}}
                onPress={filePicker.showOptions}
            />
            <Button 
                title="Pick Image"
                containerStyle={{ marginBottom: 20}}
                onPress={imagePicker.handleTakeImage}
            />
            
        </MainContainer>
    )
}