import React, { useRef, useState } from 'react'
import { View, Image, SafeAreaView, StatusBar, FlatList, Dimensions, StyleSheet } from 'react-native'
import { Button, Text, useTheme, Overlay } from '@rneui/themed'
import FastImage from 'react-native-fast-image'
import { slides } from '@components/WalkThrough/mock'
import { IRenderItem, ISlideProps } from '@components/WalkThrough/types/walkthrough'
import { WalkthroughFooter } from './components/WalkthroughFooter'
// import { IRenderItem, ISlideProps } from '@mobtex/omr-mobile/src/screens/Unauth/components/WalkThrough/types/walkthrough'
// import { WalkthroughFooter } from '@mobtex/omr-mobile/src/screens/Unauth/components/WalkThrough/components/WalkthroughFooter'
// import { slides } from '@mobtex/omr-mobile/src/screens/Unauth/components/WalkThrough/mock'
// import { MainBody } from '@mobtex/core-mobile/src/styles/components'


const { width, height } = Dimensions.get('screen')

interface IWalkThroughProps {
    isVisible: boolean
    setIsVisible: any
    slideBG?: string
    labelColor?: string
    labelLeftBtn?: string
    labelRightBtn?: string
    slideList: ISlideProps[]
}

export const WalkThroughComponent = (props: IWalkThroughProps) => {
    const { colors } = useTheme().theme
    const { 
        labelLeftBtn = 'PULAR',
        labelRightBtn = 'PRÓXIMO',
        slideBG = '#EBEBEB', 
        labelColor = colors.white, 
        slideList = slides, 
        isVisible, 
        setIsVisible
    } = props

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
    console.log('currentSlideIndex',currentSlideIndex )
    const ref = useRef(null)


    const renderItem = ({ item }: IRenderItem ) => {
        return (
            <Slide item={item} />
        )
    }

    const Slide = (props : IRenderItem) => {
        const { item } = props
        return (
            <View style={{ alignItems: 'center', backgroundColor: '#EBEBEB', width: width, paddingTop: 106 }}>
                <FastImage
                    // source={{ uri: item.image }}
                    source={item.image}

                    style={{ height: '75%', width: width }}
                    resizeMode='contain'
                />
                {/* <Text style={[styles.title, { color: labelColor} ]}>{item.title}</Text>
                <Text style={[styles.subtitle, { color: labelColor} ]}>{item.title}</Text> */}

            </View>
        )
    }


    const updateCurrentSlideIndex = (e: any) => {
        const contentOffsetx = e.nativeEvent.contentOffset.x
        const currentIndex = Math.round(contentOffsetx / width)
        setCurrentSlideIndex(currentIndex)
    }

    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1
        if (nextSlideIndex != slides.length) {
            const offset = nextSlideIndex * width
            ref?.current?.scrollToOffset({offset})
            setCurrentSlideIndex(nextSlideIndex)
        }
    }
    const goPreviousSlide = () => {
        const previousSlideIndex = currentSlideIndex - 1
        if (previousSlideIndex != slides.length) {
            const offset = previousSlideIndex * width
            ref?.current?.scrollToOffset({offset})
            setCurrentSlideIndex(previousSlideIndex)
        }
    }

    const skip = () => {
        const lastSlideIndex = slides.length - 1
        const offset = lastSlideIndex * width
        ref?.current?.scrollToOffset({offset})
        setCurrentSlideIndex(lastSlideIndex)
    }
    const leaveWalkThrough = () => {
        setCurrentSlideIndex(0)
        setIsVisible(false)
    }
    return (
        <Overlay
            isVisible={isVisible}
            onBackdropPress={() =>setIsVisible(false)}
            fullScreen
            overlayStyle={{
                padding: 0
            }}
        >
            <FlatList
                ref={ref}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                pagingEnabled
                data={slideList ?? slides}
                keyExtractor={item => item.id}
                contentContainerStyle={{ height: height * 0.75 }}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={renderItem}    
            />          
            <WalkthroughFooter 
                slides={slides} 
                slideBG={slideBG} 
                labelColor={labelColor} 
                currentSlideIndex={currentSlideIndex} 
                labelLeftBtn={labelLeftBtn} 
                labelRightBtn={labelRightBtn} 
                // onPressLeftBtn={skip} 
                onPressLeftBtn={goPreviousSlide}
                onPressRightBtn={goNextSlide}
                onPressStart={leaveWalkThrough} />

        </Overlay>
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
})