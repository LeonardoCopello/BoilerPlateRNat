import { InputProps } from '@rneui/themed'
import { fieldMaskType } from 'app/representantes/database/types/EditProfile'
import { KeyboardTypeOptions, TextInputProps, TextStyle, ViewStyle } from 'react-native'

interface ICustomStyle {
  inputCustomStyle?: ViewStyle
  labelCustomStyle?: TextStyle
  secondaryColor?: boolean
}

export interface CustomInputProps extends InputProps {
  keyboardType?: KeyboardTypeOptions
  numberOfLines?: number
}

export interface CustomIconProps {
  type?: string
  name?: string
  color?: string
}

export interface InputTextProps extends ICustomStyle {
  InputProps?: CustomInputProps
  CustomIcon?: CustomIconProps
  value: any
  fieldType?: fieldMaskType
  onBlur?: () => void
  onChangeText?: (val?: any) => void
}

export interface InputTextFormProps extends CustomInputProps, ICustomStyle {
  name: string
  control: any //Control<any, any>
  errors: any
  trim?: boolean
  keyboardType?: KeyboardTypeOptions
  icon?: string
  leftIconName?: string
  leftIconType?: string
  props?: TextInputProps
  CustomIcon?: CustomIconProps
  fieldType?: fieldMaskType
  onOptionalChange?: (value: any) => void
}
