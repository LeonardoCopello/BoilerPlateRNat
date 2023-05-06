export interface ISelectedImage {
    fileCopyUri: string
    name: string
    size: number
    type: string
    uri: string
}

export interface IImagePickerListProps {
    title: string,
    icon: IIconProps,
    type: PickType,
    onPress: () => void,
}
