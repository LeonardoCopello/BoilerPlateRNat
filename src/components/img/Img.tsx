import { Image } from '@rneui/themed'
import React from 'react'
import { ActivityIndicator, Dimensions } from 'react-native'

interface Props {
  imageUrl: string
  type?: string
  maxPercentageWidth: number
}
const answersColNumberWidth = 40

const screenDimension = Dimensions.get('window')

export const Img = ({ imageUrl, type, maxPercentageWidth }: Props) => {
  //   const sizes = calculateAspectRatioFit(
  //     width,
  //     height,
  //     screenWidth - answersColNumberWidth - 24,
  //     150,
  //   )

  //   useEffect(() => {
  //     imageUrl && setImage(imageUrl)
  //   }, [imageUrl])

  //   const images = [
  //     {
  //       uri: modalImageUrl ? modalImageUrl : image,
  //     },
  //   ]

  //   [
  //     {
  //       width: calculateAspectRatio ? sizes.width : width,
  //       height: calculateAspectRatio ? sizes.height : height,
  //       resizeMode: 'contain',
  //       borderRadius: borderRadius ? borderRadius : 0,
  //       borderWidth: borderWidth ? borderWidth : 0,
  //     },
  //   ]
  let style = {}

  const widthImage = (screenDimension.width * maxPercentageWidth) / 100
  switch (type) {
    default:
      style = {
        width: widthImage,
        marginLeft: (screenDimension.width - widthImage) / 2,
        height: 100,
      }
  }

  return (
    <Image style={style} source={{ uri: imageUrl }} PlaceholderContent={<ActivityIndicator />} />
  )
}

Img.defaultProps = {
  type: 'centered',
  maxPercentageWidth: 50,
}
