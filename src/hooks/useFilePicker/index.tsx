// import MultipleImagePicker, { ImageResults } from '@baronha/react-native-multiple-image-picker'
// import { getFileName } from '@mobtex/core-mobile/src/helpers/FileInfo'
// import { getResizableImg } from '@mobtex/core-mobile/src/helpers/getResizableImg'
// import { ICameraResponse } from '@mobtex/shared-app-olimpiadas/src/app/global/types/MobtexApp'
import { ICONS } from '@constants/icons'
import { BottomSheet, Icon, ListItem, useTheme } from '@rneui/themed'
import React, { useState } from 'react'
import DocumentPicker, { DocumentPickerResponse, types } from 'react-native-document-picker'
import { IFilePickerListProps, PickType } from '@hooks/useFilePicker/types/useFilePicker'

interface IProps {
    isMultipleSelection: boolean
    permittedTypes: PickType[]
}

/**
 * Hook para captura de imagens direto da câmera ou galeria
 * @param multiple Verifica se pode selecionar mais de uma foto. Apenas para galeria de imagens
 * @param resizeImage Ativa o redimensionamento de imagem
 * @param frontCamera Ativa a câmera frontal do aparelho
 */
// export const useImagePicker = (multiple: boolean, resizeImage: boolean, frontCamera?: boolean) => {
export const useFilePicker = (props: IProps) => {
    const {isMultipleSelection, permittedTypes} = props

    // const [selectedFileList, setSelectedFileList] = useState<ISelectedFile[]>([])
    const [selectedFileList, setSelectedFileList] = useState<DocumentPickerResponse[]>([])
    
    const [isVisible, setIsVisible] = useState(false)
    const { theme } = useTheme()
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
    }
    const clearSelectedFile = () => {
        hideOptions()

        setSelectedFileList([])
    }

    const list: IFilePickerListProps[] = [
        {
            title: 'Selecionar Pdf',
            icon: ICONS.iconPdf,
            type: 'pdf',
            onPress: () => handlePickFile('pdf'),
        },
        {
            title: 'Selecionar Tipos Variáveis',
            icon: ICONS.iconFileDownLoad,
            type: 'allFiles',
            onPress: () => handlePickFile('allFiles'),
        },
        {
            title: 'Selecionar Áudio',
            icon: ICONS.iconFileDownLoad,
            type: 'audio',
            onPress: () => handlePickFile('audio'),
        },
        {
            title: 'Selecionar Imagem',
            icon: ICONS.iconImage,
            type: 'image',
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
                    if (permittedTypes.includes(l.type)) {
                        return (
                            <ListItem key={i} onPress={() => l.onPress(l.type)}>
                                <Icon {...l.icon} />
    
                                <ListItem.Title>{l.title}</ListItem.Title>
                            </ListItem>
                        )
                    }
                })
                }

                <ListItem onPress={hideOptions} containerStyle={{ backgroundColor: theme.colors.error }}>
                    <Icon {...ICONS.iconClose} color={theme.colors.white} />

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
