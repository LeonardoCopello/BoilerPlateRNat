import { useNavigation } from '@react-navigation/native'
import { Button, Overlay, Text } from '@rneui/themed'
import React from 'react'
import { Dimensions, View } from 'react-native'
const screen = Dimensions.get('window')

interface Props {
  text?: string
  isDisableBack?: boolean
  onRefresh?: () => void
}
export const NoInternetConnection = (props: Props) => {
    const navigation = useNavigation()
    const text = props.text ? props.text : 'VOCÊ NÃO ESTÁ CONECTADO A INTERNET'
    return (
        <Overlay isVisible={true} fullScreen >
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <View
                    style={{
                        alignItems: 'center',
                        alignSelf: 'center',
                        height: 100,
                        width: 200,
                    }}>
 
                </View>

                <Text
                    style={{
                        paddingBottom: 20,
                        fontStyle: 'italic',
                        textAlign: 'center',
                    }}>
                    {text}
                </Text>
                <View style={{ alignSelf: 'center' }}>
                    {props.onRefresh && (
                        <Button
                            title="Tentar novamente"
                            icon={{
                                name: 'refresh',
                                type: 'font-awesome',
                                color: 'white',
                                size: 35,
                            }}
                            onPress={() => {
                                if (props.onRefresh) {
                                    props.onRefresh()
                                }
                            }}></Button>
                    )}
                </View>
            </View>
        </Overlay>
    )
}
