// import { imageCacheHoc } from '@mnightingale/react-native-image-cache-hoc'
// import { calculateAspectRatioFit } from '@mobtex/core-mobile/src/helpers/ImageHelper'
import DefaultImage from '@assets/img/placeholder.jpg'
import { calculateAspectRatioFit } from '@helpers/ImageHelper'
import { Button, useTheme } from '@rneui/themed'
import React, { useEffect, useState } from 'react'
import { Dimensions, Image, TouchableWithoutFeedback } from 'react-native'
import FastImage from 'react-native-fast-image'
import ImageView from 'react-native-image-viewing'
const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri

interface Props {
  imageUrl: string
  modalImageUrl?: string[]
  disableModalImage?: boolean
  imgWidth?: number
  imgHeight?: number
  calculateAspectRatio?: boolean
  borderRadius?: number
  borderWidth?: number
}

interface imgList {
  uri: string
}

//@ts-ignore
// const CacheableImage = imageCacheHoc(Image)

const answersColNumberWidth = 40

export const ImageItem = ({
    imageUrl,
    modalImageUrl,
    disableModalImage,
    imgWidth,
    imgHeight,
    calculateAspectRatio,
    borderRadius,
    borderWidth,
}: Props) => {
    const [image, setImage] = useState(DEFAULT_IMAGE)
    const [imageList, setImageList] = useState<imgList[]>([
        { uri: DEFAULT_IMAGE },
    ])
    const [visible, setIsVisible] = useState(false)
    const screenWidth = Dimensions.get('window').width
    const width = imgWidth ? imgWidth : screenWidth
    const height = imgHeight ? imgHeight : 200
    const { theme } = useTheme()

    const sizes = calculateAspectRatioFit(
        width,
        height,
        screenWidth - answersColNumberWidth - 24,
        150,
    )

    useEffect(() => {
    // console.log(imageUrl)
        if (imageUrl) {
            setImage(imageUrl)
            setImageList([{ uri: imageUrl }])
        }
    }, [imageUrl])

    useEffect(() => {
        if (modalImageUrl) {
            const list = modalImageUrl.map(img => {
                return { uri: img }
            })
            setImageList(list)
        }
    }, [modalImageUrl])

    // const RenderImage = () => {
    //   return <></>
    // }
    const RenderImage = () => (
        <FastImage
            style={{
                width: calculateAspectRatio ? sizes.width : width,
                height: calculateAspectRatio ? sizes.height : height,
                borderRadius: borderRadius ? borderRadius : 0,
                borderWidth: borderWidth ? borderWidth : 0,
            }}
            source={{
                uri: image,
                // priority: FastImage.priority.normal,
                // headers: { Authorization: 'someAuthToken' },
                // cache: FastImage.cacheControl.web,
            }}
            resizeMode={
                !disableModalImage
                    ? FastImage.resizeMode.cover
                    : FastImage.resizeMode.contain
            }
        />
    )

    return (
        <>
            {disableModalImage ? (
                <>
                    <RenderImage />
                </>
            ) : (
                <>
                    <Button
                        type="clear"
                        TouchableComponent={TouchableWithoutFeedback}
                        buttonStyle={{
                            padding: 0,
                            // backgroundColor: 'red',
                        }}
                        containerStyle={{
                            width: calculateAspectRatio ? sizes.width : width,
                            height: calculateAspectRatio ? sizes.height : height,
                        }}
                        onPress={() => setIsVisible(true)}>
                        <RenderImage />
                    </Button>

                    <ImageView
                        images={imageList}
                        imageIndex={0}
                        visible={visible}
                        onRequestClose={() => setIsVisible(false)}
                        keyExtractor={(imageSrc, index) => index.toString()}
                    />
                </>
            )}
        </>
    )
}
