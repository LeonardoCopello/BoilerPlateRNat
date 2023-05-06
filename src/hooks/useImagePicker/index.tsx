// import MultipleImagePicker, { ImageResults } from '@baronha/react-native-multiple-image-picker'
// import { getFileName } from '@mobtex/core-mobile/src/helpers/FileInfo'
// import { getResizableImg } from '@mobtex/core-mobile/src/helpers/getResizableImg'
// import { ICameraResponse } from '@mobtex/shared-app-olimpiadas/src/app/global/types/MobtexApp'
import { BottomSheet, Icon, ListItem, useTheme } from '@rneui/themed'
import React, { useState } from 'react'
import { NativeModules } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker'


export interface ISelectedFile {
  uri: string
  name: string
  type: string
  frontCamera?: boolean
}

/**
 * Hook para captura de imagens direto da câmera ou galeria
 * @param multiple Verifica se pode selecionar mais de uma foto. Apenas para galeria de imagens
 * @param resizeImage Ativa o redimensionamento de imagem
 * @param frontCamera Ativa a câmera frontal do aparelho
 */
// export const useImagePicker = (multiple: boolean, resizeImage: boolean, frontCamera?: boolean) => {
export const useImagePicker = () => {

    const [selectedFileList, setSelectedFileList] = useState<ISelectedFile[]>([])
    const [isVisible, setIsVisible] = useState(false)
    const { theme } = useTheme()
    const { MobtexApp } = NativeModules
    // const args = { moduleName: frontCamera ? 'MobtexFace' : 'MobtexPaper', scope: 'cv' } //Camera Frontal
    // const args = { moduleName: 'MobtexPaper' } //Camera Traseira

    /**
   * Exibe as opções de escolha de foto
   */
    const showOptions = () => setIsVisible(true)

    /**
   * Oculta as opções de escolha de foto
   */
    const hideOptions = () => setIsVisible(false)

    /**
   * Tira foto usando a câmera
   */
    const handleTakePicture = async () => {
        hideOptions()

        // ImagePicker.openPicker({
        //     width: 300,
        //     height: 400,
        //     cropping: true
        //   }).then(image => {
        //     console.log(image);
        //   });

        // const imageUri: ICameraResponse = await MobtexApp.start(JSON.stringify(args))

        // if (imageUri.success) {
        //     if (imageUri.imgResult) {
        //         const imgFile = await getFileDetails(imageUri.imgResult)

        //         setSelectedFileList([imgFile])
        //     }
        // }
    }

    // const handleTakePicture = async () => {
    //   hideOptions()

    //   const imageUri = await launchCamera({
    //     mediaType: 'photo',
    //     cameraType: frontCamera ? 'front' : 'back',
    //   })

    //   if (imageUri) {
    //     const firstImage = imageUri.assets?.find((item, index) => index === 0)

    //     if (firstImage && firstImage.uri && firstImage.fileName) {
    //       const auxUri = await resizeUri(firstImage.uri)

    //       if (auxUri) {
    //         const imgFile = { uri: auxUri, name: firstImage.fileName, type: 'image/jpeg' }

    //         setSelectedFileList([imgFile])
    //       }
    //     }
    //   }
    // }

    /**
   * Abre a galeria de imagens para selecionar uma foto
   */
    const handleSelectFromGalery = async () => {
        hideOptions()

        // if (multiple) {
        //     let newFile: ImageResults[] | undefined

        //     await MultipleImagePicker.openPicker({
        //         usedCameraButton: false,
        //         //@ts-ignore
        //         mediaType: 'image',
        //     })
        //         .then((response) => {
        //             //@ts-ignore
        //             newFile = response
        //         })
        //         .catch((error) => console.log(error.code, error.message))

        //     if (newFile) {
        //         const promises = newFile.map(async (item) => {
        //             if (item.realPath) {
        //                 return await getFileDetails(item.realPath)
        //             }
        //         })

        //         Promise.all(promises).then((items) => {
        //             if (items) {
        //                 //@ts-ignore
        //                 setSelectedFileList(items)
        //             }
        //         })
        //     }
        // } else {
        //     let newFile: ImageResults | undefined

        //     await MultipleImagePicker.openPicker({
        //         singleSelectedMode: true,
        //         usedCameraButton: false,
        //         //@ts-ignore
        //         mediaType: 'image',
        //     })
        //         .then((response) => {
        //             //@ts-ignore
        //             newFile = response
        //         })
        //         .catch((error) => console.log(error.code, error.message))

        //     if (newFile && newFile.realPath) {
        //         const imgFile = await getFileDetails(newFile.realPath)

        //         setSelectedFileList([imgFile])
        //     }
        // }
    }

    // const handleSelectFromGalery = async () => {
    //   hideOptions()

    //   const fileList = await launchImageLibrary({
    //     mediaType: 'photo',
    //     selectionLimit: multiple ? 0 : 1,
    //   })

    //   if (fileList && fileList.assets) {
    //     const promises = fileList.assets.map(async (item) => {
    //       if (item.uri && item.fileName) {
    //         return { uri: await resizeUri(item.uri), name: item.fileName, type: 'image/jpeg' }
    //       }
    //     })

    //     Promise.all(promises).then((items) => {
    //       if (items) {
    //         //@ts-ignore
    //         setSelectedFileList(items)
    //       }
    //     })
    //   }
    // }

    /**
   * @returns Um objeto com as informacões da imagem
   */
    const getFileDetails = async (uri: string) => {
        // let resized = uri

        // if (resizeImage) {
        //     resized = await getResizableImg(uri)
        // }

        // return {
        //     uri: resized,
        //     name: getFileName(resized),
        //     type: 'image/jpeg',
        // }
    }

    /**
   * Limpa o arquivo selecionado
   */
    const clearSelectedFile = () => {
        hideOptions()

        setSelectedFileList([])
    }

    const list = [
        {
            title: 'Selecionar foto da Galeria',
            iconName: 'image-multiple-outline',
            onPress: handleSelectFromGalery,
        },
        { title: 'Tirar Foto', iconName: 'camera-outline', onPress: handleTakePicture },
        { title: 'Deletar Foto', iconName: 'delete-forever-outline', onPress: clearSelectedFile },
    ]

    /**
   * Modal com as opções 'Tirar Foto', 'Abrir Galeria', 'Deletar Foto' e 'Cancelar'
   */
    const ImagePicker = () => {
        return (
            <>
                <BottomSheet isVisible={isVisible} onBackdropPress={hideOptions}>
                    {list.map((l, i) => {
                        if ((selectedFileList.length === 0 && i < 2) || selectedFileList.length > 0)
                            return (
                                <ListItem key={i} onPress={l.onPress}>
                                    <Icon name={l.iconName} />

                                    <ListItem.Title>{l.title}</ListItem.Title>
                                </ListItem>
                            )
                    })}

                    <ListItem onPress={hideOptions} containerStyle={{ backgroundColor: theme.colors.error }}>
                        <Icon name="close-circle-outline" color={theme.colors.white} />

                        <ListItem.Title style={{ color: theme.colors.white }}>Cancelar</ListItem.Title>
                    </ListItem>
                </BottomSheet>
            </>
        )
    }

    return {
        selectedFileList: selectedFileList,
        clearSelectedFile: clearSelectedFile,
        handleTakePicture: handleTakePicture,
        handleSelectFromGalery: handleSelectFromGalery,
        showOptions: showOptions,
        hideOptions: hideOptions,
        ImagePicker: ImagePicker,
    }
}
