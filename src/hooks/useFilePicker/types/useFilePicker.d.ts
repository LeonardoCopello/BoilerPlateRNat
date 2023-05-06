export interface ISelectedFile {
    fileCopyUri: string
    name: string
    size: number
    type: string
    uri: string
}

export interface IFilePickerListProps {
    title: string,
    icon: IIconProps,
    type: PickType,
    onPress: (arg: PickType) => void,
}

export type PickType = 'pdf' | 'allFiles' | 'audio' | 'image'
