import React, { useEffect } from 'react'
import { Button, Text } from '@rneui/themed'
import { MainBody, MainContainer } from '@components/Containers'
import { HeaderDefault } from '@components/HeaderDefault'
import { DialogConfirm } from '@components/Dialog/DialogConfirm'
import { useVisibility } from '@hooks/useVisibility'
import { DialogError } from '@components/Dialog/DialogError'
import { useImagePicker } from '@hooks/useImagePicker'
import { useFilePicker } from '@hooks/useFilePicker'
import { FlatList, Image } from 'react-native'
import { SearchComponent } from '@components/Search'
import { useFilter } from '@hooks/useFilter'
import { persons } from '@constants/mocks'
import { DialogButtonLess } from '@components/Dialog/DialogButtonLess'
import { DialogBothBtns } from '@components/Dialog/DialogBothBtns'
import { WalkThroughComponent } from '@components/WalkThrough'
import { slides } from '@components/WalkThrough/mock'

export const TestPage = () => {
    const stateConfirm = useVisibility()
    const stateError = useVisibility()
    const stateWalkThrough = useVisibility()
    const stateBothBtns = useVisibility()
    const stateImagePicker  = useVisibility()
    // const { } = useImagePicker({multiple: false , resizeImage: false, frontCamera: false})
    const filePicker  = useFilePicker({ isMultipleSelection: true, permittedTypes: ['allFiles', 'image']})
    const imagePicker = useImagePicker({ useFrontCamera: false, height: 300, width: 100 ,media: { mediaType: 'photo', canCrop: true }, compressQuality: 0.2 })
    const {  filteredList, isSearching, setSearch, search } = useFilter({ originalList: persons, propName: 'matricula', typeSearch: 'mixed'})
    

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

            {/* <MainBody > */}
            <SearchComponent 
                setSearch={setSearch} 
                isSearching={isSearching}
                search={search} 
                typeSearch='mixed'
                placeholder='Matrícula...' 
            />
            <FlatList
                data={filteredList}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <Text>{item.name}</Text>
                    )
                }}
                
            />
            {/* { imagePicker.selectedImage.path !== null && <Image source={{uri: imagePicker.selectedImage.path}} style={{ width: 200, height: 700}} resizeMode='contain'/>} */}
            <DialogConfirm
                title='Confirma exclusão?'
                bodyText='Corpo do Dialog Confirm'
                isVisible={stateConfirm.isVisible}
                labelBtnConfirm={undefined}
                modalType='bottomSheet'          
                toggleVisibility={stateConfirm.toggleVisibility}
                onPressConfirm={onPressConfirm} 
            />
            <DialogBothBtns
                title='Erro'
                bodyText='Corpo do Dialog Error'
                isVisible={stateError.isVisible}
                modalType='bottomSheet'
                toggleVisibility={stateError.toggleVisibility} 
                onPressConfirm={onPressConfirm}
                labelBtnConfirm={undefined} 
                labelBtnCancel={undefined} 
                onPressCancel={onPressCancel}
            />
            <WalkThroughComponent 
                isVisible={stateWalkThrough.isVisible} 
                setIsVisible={stateWalkThrough.setIsVisible}
                slideList={slides}                
            />
            <filePicker.BottomSheetFilePicker />
               
            <Button 
                title="Dialog Confirm"
                containerStyle={{ marginBottom: 20}}
                onPress={stateConfirm.toggleVisibility}
            />
            <Button 
                title="Dialog Both Btns"
                containerStyle={{ marginBottom: 20}}
                onPress={stateError.toggleVisibility}
            />
            <Button 
                title="Walkthrough"
                containerStyle={{ marginBottom: 20}}
                onPress={stateWalkThrough.toggleVisibility}
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