import { PermissionsAndroid } from 'react-native'

export const requestCameraPermission = async () => {
    console.log('entrou camera permission')
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: 'Permissão de uso da Câmera',
                message:
            'O aplicativo necessita permissão para uso da câmera ' +
            'assim você pode fotografar.',
                buttonNeutral: 'Pergunte-me depois',
                buttonNegative: 'Cancelar',
                buttonPositive: 'OK',
            },
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the camera')
        } else {
            console.log('Camera permission denied')
        }
    } catch (err) {
        console.warn(err)
    }
}
  
