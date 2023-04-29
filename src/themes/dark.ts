import { createTheme } from '@rneui/themed'

export const dark = createTheme({
    lightColors: {
        primary: '#e7e7e8',
        accent: 'red'
    },
    darkColors: {
        primary: '#000',
    },
    mode: 'dark',
})
