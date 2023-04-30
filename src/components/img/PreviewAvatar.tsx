import React from 'react'

interface PreviewAvatarProps {
  imagePath: string
  avatarRadius?: number
}

export const PreviewAvatar = ({
    imagePath,
    avatarRadius,
}: PreviewAvatarProps) => {
    return <></>
    // useEffect(() => {
    //   FastImage.preload([
    //     {
    //       uri: imagePath,
    //       headers: { Authorization: 'someAuthToken' },
    //     },
    //   ])
    // }, [imagePath])

    // const ImgComp = imagePath
    //   ? class extends React.Component {
    //       public render() {
    //         return (
    //           <FastImage
    //             style={{
    //               width: undefined,
    //               height: '100%',
    //               aspectRatio: 1,
    //               // resizeMode: 'contain',
    //             }}
    //             source={{ uri: imagePath }}
    //             resizeMode="contain"
    //           />
    //         )
    //       }
    //     }
    //   : undefined

    // return (
    //   <Avatar
    //     size={avatarRadius ? avatarRadius : 64}
    //     ImageComponent={ImgComp}
    //     // source={{ uri: imagePath }}
    //   />
    // )
}
