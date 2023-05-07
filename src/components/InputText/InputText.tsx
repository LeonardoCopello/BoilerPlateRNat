// import { maskCpfCnpj, maskPhone, maskCEP } from '@mobtex/core-mobile/src/helpers/Masks'
import { Icon, Input, useTheme } from '@rneui/themed'
import React, { useState } from 'react'
import { InputTextProps } from './type/InputText'
import { maskCEP, maskCpfCnpj, maskPhone } from '@helpers/Masks'

export const InputText = ({
    InputProps,
    CustomIcon,
    value,
    secondaryColor,
    fieldType,
    inputCustomStyle,
    labelCustomStyle,
    onChangeText,
    onBlur,
}: InputTextProps) => {
    const [hidePassword, setHidePassword] = useState(false)
    const { theme } = useTheme()

    const leftIconItem = {
        type: CustomIcon?.type ?? 'material-community',
        name: CustomIcon?.name ?? 'arrow-left',
        color: !secondaryColor ? theme.colors.black : theme.colors.white,
        labelColor: !secondaryColor ? theme.colors.primary : theme.colors.white,
    }

    const leftIcon = (
        <Icon
            name={leftIconItem.name}
            type={leftIconItem.type}
            color={leftIconItem.color}
            style={{
                display: CustomIcon?.name ? 'flex' : 'none',
                paddingHorizontal: 10,
            }}
        />
    )

    const rightIcon = (
        <Icon
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            type={leftIconItem.type}
            color={!InputProps?.disabled ? leftIconItem.labelColor : theme.colors.disabled}
            disabled={InputProps?.disabled}
            disabledStyle={{ backgroundColor: 'transparent' }}
            style={{
                display: InputProps?.secureTextEntry ? 'flex' : 'none',
                paddingHorizontal: 10,
            }}
            onPress={() => setHidePassword(!hidePassword)}
        />
    )

    return (
        <Input
            {...InputProps}
            value={value}
            multiline={InputProps && (InputProps.numberOfLines ? true : false)}
            secureTextEntry={InputProps?.secureTextEntry ? !hidePassword : false}
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            style={{ color: leftIconItem.color }}

            labelStyle={{
                color: leftIconItem.labelColor,
                ...labelCustomStyle,
            }}
            inputContainerStyle={{
                borderWidth: 1,
                borderRadius: 15,
                borderColor: theme.colors.primary,
                ...inputCustomStyle,
            }}
            onBlur={onBlur}
            onChangeText={(text) => {
                if (onChangeText) {
                    if (fieldType === 'cpf_cnpj') {
                        onChangeText(maskCpfCnpj(text))
                    } else if (fieldType === 'phone') {
                        onChangeText(maskPhone(text)) 
                    } else if (fieldType === 'CEP') {
                        onChangeText(maskCEP(text)) 
                    } else {
                        onChangeText(text)
                    }
                }
            }}
        />
    )
}
