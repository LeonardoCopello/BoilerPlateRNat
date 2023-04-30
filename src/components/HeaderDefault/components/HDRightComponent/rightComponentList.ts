import { defaultValues } from '@components/HeaderDefault/helpers/defaultComponent'
import { rightComponentItem } from '@components/HeaderDefault/types/rightComponent'

export const rightComponentList: rightComponentItem[] = [
    {
        ...defaultValues,
        type: 'refresh',
        iconName: 'refresh',
    },
    {
        ...defaultValues,
        type: 'edit',
        iconName: 'edit',
    },
    {
        ...defaultValues,
        type: 'info',
        iconName: 'information-outline',
        iconType: 'antdesign',
    },
    {
        ...defaultValues,
        type: 'share',
        iconName: 'share-variant',
    },
    {
        ...defaultValues,
        type: 'delete',
        iconName: 'delete',
    },
    {
        ...defaultValues,
        type: 'add',
        iconName: 'add',
        iconType: 'ionicons',
    },
    {
        ...defaultValues,
        type: 'closeCircle',
        iconName: 'close-circle-outline',
    },
    {
        ...defaultValues,
        type: 'removeTextBox',
        iconName: 'text-box-remove-outline',
    },
    {
        ...defaultValues,
        type: 'removeFile',
        iconName: 'file-remove-outline',
    },
    {
        ...defaultValues,
        type: 'emailSearch',
        iconName: 'email-search-outline',
    },
]
