// import MultipleImagePicker, { ImageResults } from '@baronha/react-native-multiple-image-picker'
// import { getFileName } from '@mobtex/core-mobile/src/helpers/FileInfo'
// import { getResizableImg } from '@mobtex/core-mobile/src/helpers/getResizableImg'
// import { ICameraResponse } from '@mobtex/shared-app-olimpiadas/src/app/global/types/MobtexApp'
import { BottomSheet, Icon, ListItem, useTheme } from '@rneui/themed'
import React, { useState } from 'react'
import DocumentPicker, { DocumentPickerResponse, types } from 'react-native-document-picker'



export interface ISelectedFile {
  fileCopyUri: string
  name: string
  size: number
  type: string
  uri: string
}

type PickType = 'pdf' | 'allFiles' | 'audio' | 'image'


interface IProps {
    isMultipleSelection: boolean
    // types: PickType[]
}

/**
 * Hook para captura de imagens direto da câmera ou galeria
 * @param multiple Verifica se pode selecionar mais de uma foto. Apenas para galeria de imagens
 * @param resizeImage Ativa o redimensionamento de imagem
 * @param frontCamera Ativa a câmera frontal do aparelho
 */
// export const useImagePicker = (multiple: boolean, resizeImage: boolean, frontCamera?: boolean) => {
export const useFilePicker = (props: IProps) => {
    const {isMultipleSelection} = props

    // const [selectedFileList, setSelectedFileList] = useState<ISelectedFile[]>([])
    const [selectedFileList, setSelectedFileList] = useState<DocumentPickerResponse[]>([])
    
    const [isVisible, setIsVisible] = useState(false)
    const { theme } = useTheme()
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

    const handlePickFile = async (type: PickType) => {
        hideOptions()
        let selectedType
        switch (type) {
        case 'pdf':
            selectedType = [types.pdf]
            break
        case 'allFiles':
            selectedType = [types.allFiles]
            break
        case 'image':
            selectedType = [types.images]
            break
        case 'audio':
            selectedType = [types.audio]
            break
        default:
            selectedType = [types.allFiles]
        }
        try {
            const response = await DocumentPicker.pick({
                allowMultiSelection: isMultipleSelection,
                type: selectedType,
                presentationStyle: 'fullScreen',
            })
            setSelectedFileList(response)
        } catch (err) {
            console.warn(err)
        }

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

    /**
   * Limpa o arquivo selecionado
   */
    const clearSelectedFile = () => {
        hideOptions()

        setSelectedFileList([])
    }

    const list = [
        {
            title: 'Selecionar Pdf',
            iconName: 'image-multiple-outline',
            onPress: () => handlePickFile('pdf'),
        },
        {
            title: 'Selecionar Tipos Variáveis',
            iconName: 'image-multiple-outline',
            onPress: () => handlePickFile('allFiles'),
        },
        {
            title: 'Selecionar Áudio',
            iconName: 'image-multiple-outline',
            onPress: () => handlePickFile('audio'),
        },
        {
            title: 'Selecionar Imagem',
            iconName: 'image-multiple-outline',
            onPress: () => handlePickFile('image'),
        }
    ]

    /**
   * Modal com as opções 'Tirar Foto', 'Abrir Galeria', 'Deletar Foto' e 'Cancelar'
   */
    const BottomSheetFilePicker = () => {
        return (
            <BottomSheet isVisible={isVisible} onBackdropPress={hideOptions}>
                {list.map((l, i) => {
                    return (
                        <ListItem key={i} onPress={l.onPress}>
                            <Icon name={l.iconName} />

                            <ListItem.Title>{l.title}</ListItem.Title>
                        </ListItem>
                    )
                })
                }

                <ListItem onPress={hideOptions} containerStyle={{ backgroundColor: theme.colors.error }}>
                    <Icon name="close-circle-outline" color={theme.colors.white} />

                    <ListItem.Title style={{ color: theme.colors.white }}>Cancelar</ListItem.Title>
                </ListItem>
            </BottomSheet>
        )
    }

    return {
        selectedFileList: selectedFileList,
        clearSelectedFile: clearSelectedFile,
        // handleSelectFromGalery: handleSelectFromGalery,
        showOptions: showOptions,
        hideOptions: hideOptions,
        BottomSheetFilePicker: BottomSheetFilePicker,
        handlePickFile: handlePickFile
    }
}
