export type leftComponentType = 'default' | 'drawer'

export interface HDLeftComponentProps {
  iconType: leftComponentType
  isDisableLeftIcon?: boolean
  size?: number
}

export interface leftComponentItem {
  type: leftComponentType
  iconName: string
  iconType: string
  iconSize: number
  color: string
  onPress: () => void
}
