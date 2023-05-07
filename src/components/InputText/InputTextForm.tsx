import { ErrorMessage } from '@hookform/error-message'
import { Text, useTheme } from '@rneui/themed'
import React from 'react'
import { Controller } from 'react-hook-form'
import { View } from 'react-native'
import { InputText } from './InputText'
import { InputTextFormProps } from './type/InputText'

export const InputTextForm = ({
    name,
    control,
    errors,
    trim,
    // leftIcon,
    // leftIconType,
    // leftIconName,
    secondaryColor,
    CustomIcon,
    fieldType,
    onOptionalChange,
    inputCustomStyle,
    labelCustomStyle,
    ...InputProps
}: InputTextFormProps) => {
    const { theme } = useTheme()

    return (
        <View style={{ flex: 1, marginBottom: 5 }}>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View>
                        <InputText
                            secondaryColor={secondaryColor}
                            InputProps={InputProps}
                            CustomIcon={CustomIcon}
                            onBlur={() => {
                                onBlur()
                                onOptionalChange && onOptionalChange(value)
                            }}
                            value={value}
                            fieldType={fieldType}
                            onChangeText={(value) => {
                                trim && value.trim()
                                onChange(value.trimStart())
                                onOptionalChange && onOptionalChange(value)
                            }}
                            inputCustomStyle={inputCustomStyle}
                            labelCustomStyle={labelCustomStyle}
                        />
                        {errors && !value ? (
                            <ErrorMessage
                                errors={errors}
                                name={name}
                                render={({ message }) => (
                                    <Text
                                        style={{
                                            color: theme.colors.error,
                                            fontSize: 8,
                                            marginTop: -25,
                                            textAlign: 'center',
                                        }}>
                                        {message}
                                    </Text>
                                )}
                            />
                        ) : null}

                    </View>
                )}
                name={name}
            />
        </View>
    )
}
