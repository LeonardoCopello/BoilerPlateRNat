import { ICONS } from '@constants/icons'
import { BottomSheet, Icon, ListItem, useTheme } from '@rneui/themed'
import React, { useState } from 'react'
import ImagePicker, { ImageCropPicker, openPicker, openCamera, ImageOrVideo } from 'react-native-image-crop-picker'
import { IImagePickerListProps } from '@hooks/useImagePicker/types/useImagePicker'
import { PermissionsAndroid } from 'react-native'
import { requestCameraPermission } from '@helpers/permissions'

export interface ISelectedFile {
  uri: string
  name: string
  type: string
  frontCamera?: boolean
}

type MediaType = 'video' | 'photo'

interface IProps {
    media: {
        mediaType: MediaType,
        canCrop: boolean
    }
    // canCrop: boolean
    useFrontCamera: boolean
}

export interface ISelectedImage {
    height: number,
    width: number,
    x: number, 
    y: number
}

// video {
//     duration: number //1365, 
//     height: number //1920, 
//     mime: string // "video/mp4", 
//     modificationDate: string //"1683383011000", 
//     path: string // "file:///storage/emulated/0/Android/data/com.boilerplate/files/Pictures/video-c0ff7dca-9609-45b2-ae17-75aad0229f316882656712171074004.mp4", 
//     size: number //3792724, 
//     width: number //1080
// } 
// imagem {
//     "cropRect": {"height": 4080, "width": 3062, "x": 5, "y": 0},
//     "height": 400,
//     "mime": "image/jpeg",
//     "modificationDate": "1683380497000", 
//     "path": "file:///storage/emulated/0/Android/data/com.boilerplate/files/Pictures/9bb4c6ae-2eec-4f94-aa7a-581dfff8c191.jpg", 
//     "size": 87892, 
//     "width": 300
// }
   
/**
 * Hook para captura de imagens direto da câmera ou galeria
 * @param multiple Verifica se pode selecionar mais de uma foto. Apenas para galeria de imagens
 * @param resizeImage Ativa o redimensionamento de imagem
 * @param frontCamera Ativa a câmera frontal do aparelho
 */
// export const useImagePicker = (multiple: boolean, resizeImage: boolean, frontCamera?: boolean) => {
export const useImagePicker = (props: IProps) => {
    const { media, useFrontCamera } = props

    // const [selectedFileList, setSelectedFileList] = useState<ISelectedFile[]>([])
    const [selectedImage, setSelectedImage] = useState<ImageOrVideo>({} as ImageOrVideo)
    // const [isVisible, setIsVisible] = useState(false)
    // const { theme } = useTheme()
    // const args = { moduleName: frontCamera ? 'MobtexFace' : 'MobtexPaper', scope: 'cv' } //Camera Frontal
    // const args = { moduleName: 'MobtexPaper' } //Camera Traseira

    /**
   * Exibe as opções de escolha de foto
   */
    // const showOptions = () => setIsVisible(true)

    /**
   * Oculta as opções de escolha de foto
   */
    // const hideOptions = () => setIsVisible(false)

    // interface ITakePictureProps {
    //     useFrontCamera: boolean
    // }

    /**
   * Tira foto ou video usando a câmera
   */
    const handleTakeImage = async () => {
        requestCameraPermission()
        // hideOptions()
        openCamera({
            mediaType: media.mediaType,
            width: 300,
            height: 400,
            cropping: media.mediaType === 'photo' ? media.canCrop : false,
            useFrontCamera: useFrontCamera
        }).then(file => {
            console.log('file', file)
            setSelectedImage(file)
        })

        // if (imageUri.success) {
        //     if (imageUri.imgResult) {
        //         const imgFile = await getFileDetails(imageUri.imgResult)

        //         setSelectedFileList([imgFile])
        //     }
        // }
    }

    /**
    * Grava video usando a câmera
    */
    // const handleTakeVideo = async () => {
    //     requestCameraPermission()
    //     hideOptions()
    //     openCamera({
    //         mediaType: 'video',
    //         width: 300,
    //         height: 400,
    //     }).then(image => {
    //         setSelectedImage(image)
    //         console.log('imagem', image)
    //     })
    // }

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
    // const clearSelectedFile = () => {
    //     hideOptions()

    //     setSelectedFileList([])
    // }

    // const list: IImagePickerListProps[] = [
    //     {
    //         title: 'Tirar Foto Câmera Traseira',
    //         icon: ICONS.iconImage,
    //         type: 'photo',
    //         onPress: () => handleTakePicture({ useFrontCamera: false}),
    //     },
    //     {
    //         title: 'Tirar Selfie',
    //         icon: ICONS.iconImage,
    //         type: 'photo',
    //         onPress: () => handleTakePicture({ useFrontCamera: true}),
    //     },
    //     {
    //         title: 'Selecionar Video',
    //         icon: ICONS.iconVideoAdd,
    //         type: 'video',
    //         onPress: handleTakeVideo,
    //     }
    // ]

    /**
   * Modal com as opções 'Tirar Foto', 'Abrir Galeria', 'Deletar Foto' e 'Cancelar'
   */

    // const BottomSheetImagePicker = () => {
    //     return (
    //         <>
    //             <BottomSheet isVisible={isVisible} onBackdropPress={hideOptions}>
    //                 {list.map((l, i) => {
    //                     // if ((selectedFileList.length === 0 && i < 2) || selectedFileList.length > 0)
    //                     return (
    //                         <ListItem key={i} onPress={l.onPress}>
    //                             <Icon {...l.icon} />

    //                             <ListItem.Title>{l.title}</ListItem.Title>
    //                         </ListItem>
    //                     )
    //                 })}

    //                 <ListItem onPress={hideOptions} containerStyle={{ backgroundColor: theme.colors.error }}>
    //                     <Icon {...ICONS.iconClose} color={theme.colors.white} />

    //                     <ListItem.Title style={{ color: theme.colors.white }}>Cancelar</ListItem.Title>
    //                 </ListItem>
    //             </BottomSheet>
    //         </>
    //     )
    // }

    return {
        // selectedFileList: selectedFileList,
        selectedImage: selectedImage,
        // clearSelectedFile: clearSelectedFile,
        handleTakeImage: handleTakeImage,
        // handleTakeVideo: handleTakeVideo,
        // showOptions: showOptions,
        // hideOptions: hideOptions,
        // BottomSheetImagePicker: BottomSheetImagePicker,
    }
}
