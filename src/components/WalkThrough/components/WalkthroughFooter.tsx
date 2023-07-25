import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { ISlideProps } from '../types/walkthrough'
import { Button, Text, useTheme } from '@rneui/themed'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { ButtonSkip, ButtonWalkThrough } from './Buttons'



const { width, height } = Dimensions.get('window')

interface IFooterProps {
    slides: ISlideProps[]
    slideBG: string
    labelColor: string
    currentSlideIndex: number
    labelLeftBtn: string
    labelRightBtn: string
    onPressLeftBtn: () => void
    onPressRightBtn: () => void
    onPressStart: () => void
}

export const WalkthroughFooter = (props: IFooterProps) => {
    const { slides, slideBG, currentSlideIndex, labelColor, labelLeftBtn, labelRightBtn, onPressLeftBtn, onPressRightBtn, onPressStart } = props

    const labelSkipBtn = () => {
        if (slides.length === 0) {
            return 'Voltar'
        }
        if (currentSlideIndex !== slides.length - 1) {
            return 'Pular tutorial'
        } else {
            return 'Sair do Tutorial'
        }
    }

    return (
        <View style={{ height: height * 0.25, justifyContent: 'space-between', paddingHorizontal: 20, backgroundColor: slideBG }}>
            { slides.length > 1 && 
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                { slides.map((slide, index) => {
                    return (
                        <View 
                            key={index} 
                            style={[
                                styles.indicator,
                                currentSlideIndex === index && {
                                    backgroundColor: '#0F9347',
                                    width: 25
                                }
                            ]} />
                    )
                })}
            </View>
            }

            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <Grid style={{ 
                    height: 100,
                    marginBottom: 40,
                    paddingLeft: 40,
                    paddingRight: 40,
                    // backgroundColor: 'yellow'
                }}>
                    <Row>
                        <Col>
                            { currentSlideIndex !== 0 && slides.length !== 0 &&
                        <ButtonWalkThrough 
                            label='< Retornar'
                            onPress={onPressLeftBtn}/>
                            }
                        </Col>
                        <Col style={{ alignItems: 'flex-end'}}>
                            { currentSlideIndex !== slides.length - 1 && slides.length !== 0 &&
                            <ButtonWalkThrough 
                                label='Próximo >'
                                onPress={onPressRightBtn}/>
                            }
                        </Col>
                    </Row>
                    <Row style={{ justifyContent: 'center'}}>
                        <ButtonSkip 
                            label={labelSkipBtn()}
                            onPress={onPressStart}/>
                    </Row>
                </Grid>
            </View>


            {/* <View style={{ marginBottom: 20}}>
                {
                    currentSlideIndex === slides.length - 1 ? (
                        <View style={{ height: 50}}>
                            <Button
                                titleStyle={{ fontWeight: 'bold', color: slideBG }}
                                buttonStyle={{ borderRadius: 5, borderColor: labelColor, borderWidth: 3, width: width * 0.89, height: 50, backgroundColor: labelColor }}
                                type='solid'
                                title='INICIAR' 
                                onPress={onPressStart}
                            />
                        </View>
                    ) : (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Button
                                titleStyle={{ fontWeight: 'bold', color: labelColor }}
                                buttonStyle={{ borderRadius: 5, borderColor: labelColor, borderWidth: 3, width: width * 0.42, height: 50,  }}
                                type='outline'
                                title={labelLeftBtn} 
                                onPress={onPressLeftBtn} 
                            />
                            <Button
                                titleStyle={{ fontWeight: 'bold', color: slideBG }}
                                buttonStyle={{ borderRadius: 5, borderColor: labelColor, borderWidth: 3, width: width * 0.42, height: 50, backgroundColor: labelColor  }}
                                type='solid'
                                title={labelRightBtn} 
                                onPress={onPressRightBtn} 
                            />
                        </View>
                    )
                }
                
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 13,
        marginTop: 10,
        maxWidth: '70%',
        textAlign: 'center',
        lineHeight: 23
    },
    indicator: {
        height: 5,
        width: 10,
        marginHorizontal: 3,
        borderRadius: 2,
        backgroundColor: 'white'
    },
})