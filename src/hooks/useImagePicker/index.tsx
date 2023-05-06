import React, { useState } from 'react'
import { openCamera, ImageOrVideo } from 'react-native-image-crop-picker'

import { requestCameraPermission } from '@helpers/permissions'
import { IUseImagePickerProps } from '@hooks/useImagePicker/types/useImagePicker'

/**
 * Hook para captura de imagens direto da câmera ou galeria
 * @param media Passa tipo de imagem a pegar (video ou foto) e se pode redimensionar
 * @param useFrontCamera Verifica se permite usar a câmera frontal
 * @param width largura da imagem
 * @param height altura da imagem
 */
export const useImagePicker = (props: IUseImagePickerProps) => {
    const { media, useFrontCamera, width = 300, height = 400, compressQuality = 1 } = props
    const { canCrop, mediaType } = media

    const [selectedImage, setSelectedImage] = useState<ImageOrVideo>({} as ImageOrVideo)
    const [base64Data, setBase64Data] = useState('')

    /**
   * Tira foto ou video usando a câmera
   */
    const handleTakeImage = async () => {
        requestCameraPermission()
        // hideOptions()
        if (mediaType === 'photo') {
            openCamera({
                mediaType: 'photo',
                width: width,
                height: height,
                cropping: canCrop,
                useFrontCamera: useFrontCamera,
                includeBase64: true,
                freeStyleCropEnabled: true,
                cropperToolbarTitle: 'Ajuste da Image',
                compressImageQuality: compressQuality           
            }).then(file => {
                console.log('file', file)
                setBase64Data(`data:${file.mime};base64,${file.data}`)
                setSelectedImage(file)
            })
        }
        if (mediaType === 'video') {
            openCamera({
                mediaType: 'video',
                useFrontCamera: useFrontCamera,
                compressQuality: compressQuality
            }).then(file => {
                console.log('file', file)
                setSelectedImage(file)
            })
        }
    }


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

    /**
   * @returns selectedImage - Retorna um objeto com as informacões da imagem
   * @returns handleTakeImage - Abre a tela de captura
   * @returns base64Data - Retorna dados da image em base64
   * 
   */
    return {
        selectedImage: selectedImage,
        handleTakeImage: handleTakeImage,
        base64DataFile: base64Data

    }
}
