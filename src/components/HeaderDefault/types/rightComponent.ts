export type rightComponentType =
  | 'refresh'
  | 'edit'
  | 'info'
  | 'share'
  | 'delete'
  | 'add'
  | 'closeCircle'
  | 'removeTextBox'
  | 'removeFile'
  | 'emailSearch'

export interface HDRightComponentProps {
  iconType: rightComponentType
  isDisableRightIcon?: boolean
  size?: number
  onPress?: () => void
}

export interface rightComponentItem {
  type: rightComponentType
  iconName: string
  iconType: string
  iconSize: number
  color: string
}
