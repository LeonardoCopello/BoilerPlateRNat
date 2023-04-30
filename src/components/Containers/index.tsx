import React from 'react'
import { ScrollView, StyleProp, ViewStyle } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components'


export const MainContainer = styled(SafeAreaView).attrs({
    flex: 1,
})``


export const MainBodyView = styled(ScrollView).attrs({
    contentContainerStyle: {},
})``

export const MainBody = styled(
    ScrollView,
).attrs<IMainBodyWithPadding>(({ pb }) => ({
    contentContainerStyle: {
        flexGrow: 1,
        paddingBottom: pb ? pb : 0,
    },
}))<IMainBodyWithPadding>``

interface IMainBodyWithPadding {
  pb?: number
}

export const MainBodyWithPadding = styled(
    ScrollView,
).attrs<IMainBodyWithPadding>(({ pb }) => ({
    contentContainerStyle: {
        flexGrow: 1,
        paddingBottom: pb ? pb : 0,
    },
}))<IMainBodyWithPadding>``
