import { IIconProps } from '@constants/types/constants'


interface IIcon {
  iconAudioDownload: IIconProps
  iconInfo: IIconProps
  iconArrowUp: IIconProps
  iconDeleteTrash: IIconProps
  iconEdit: IIconProps
  iconImage: IIconProps
  iconSelection: IIconProps
  iconFileDownLoad: IIconProps
  iconPdf: IIconProps
  iconShare: IIconProps
  iconPlus: IIconProps
  iconClose: IIconProps
  iconSearch: IIconProps
  iconRightArrow: IIconProps
  iconCalendar: IIconProps
  iconArrowExpandUp: IIconProps
  iconArrowExpandDown: IIconProps
  iconTruckDeliveryOutline: IIconProps
  iconAttachFile: IIconProps
  iconPlusCircleOutline: IIconProps
  iconVideoAdd: IIconProps
}

export const ICONS: IIcon = {
    iconAudioDownload: {
        type: 'font-awesome',
        name: 'file-audio-o'
    },
    iconInfo: {
        type: 'ionicon',
        name: 'information-circle-sharp',
    },
    iconArrowUp: {
        name: 'arrow-up',
        type: 'feather',
    },
    iconDeleteTrash: {
        name: 'delete',
        type: 'antdesign',
    },
    iconEdit: { type: 'font-awesome-5', name: 'edit' },
    iconImage: { type: 'entypo', name: 'image' },
    iconSelection: {
        type: 'antdesign',
        name: 'caretdown',
    },
    iconFileDownLoad: {
        type: 'material-community',
        name: 'file-download-outline',
    },
    iconPdf: { type: 'antdesign', name: 'pdffile1' },
    iconShare: { type: 'font-awesome', name: 'share-alt' },
    iconPlus: { type: 'entypo', name: 'plus' },
    iconClose: { type: 'font-awesome', name: 'close' },
    iconSearch: { type: 'MaterialCommunityIcons', name: 'search' },
    iconRightArrow: { type: 'font-awesome', name: 'arrow-circle-right' },
    iconCalendar: { type: 'entypo', name: 'calendar' },
    iconArrowExpandUp: { type: 'material-community', name: 'arrow-expand-up' },
    iconArrowExpandDown: {
        type: 'material-community',
        name: 'arrow-expand-down',
    },
    iconAttachFile: { name: 'file-image-plus', type: 'material-community' },

    iconTruckDeliveryOutline: {
        type: 'material-community',
        name: 'truck-delivery-outline',
    },
    iconPlusCircleOutline: {
        type: 'material-community',
        name: 'plus-circle-outline',
    },
    iconVideoAdd: {
        type: 'material-community',
        name: 'video-plus',
    },
}

// /** Estilização dos inputs do Logistics */
// const labelInput: TextStyle = {
//     fontSize: RFValue(14),
//     marginLeft: -8,
// }
// const inputContainer: ViewStyle = {
//     borderRadius: RFValue(6),
//     marginLeft: -5,
//     height: RFValue(40),
// }
// const INPUT_STYLE = {
//     labelCustomStyle: labelInput,
//     inputCustomStyle: inputContainer
// }

// const constLogistics = { PACKAGE_TYPE_LIST, ICONS, INPUT_STYLE, STATES_BR2 }

// export default constLogistics
