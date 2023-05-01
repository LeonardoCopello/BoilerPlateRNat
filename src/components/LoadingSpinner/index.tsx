import { useTheme } from '@rneui/themed'
import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay/lib'

interface IProps {
  title?: string
  progress?: number
}

export const LoadingSpinner = ({ title, progress }: IProps) => {
    const { theme } = useTheme()

    const textContent = title ?? 'Aguarde...'

    return (
        <>
            <Spinner
                visible={true}
                textContent={textContent}
                textStyle={{ color: theme.colors.white }}
                color={theme.colors.white}
                overlayColor={'rgba(0, 0, 0, 0.75)'}
                animation="fade"
            />
        </>
    )
}
