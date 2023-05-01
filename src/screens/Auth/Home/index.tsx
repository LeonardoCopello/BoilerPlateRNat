import { MainBody, MainContainer } from '@components/Containers'
import { HeaderDefault } from '@components/HeaderDefault'
import { LoadingSpinner } from '@components/LoadingSpinner'
import { useAxios } from '@hooks/useAxios'
import { Text } from '@rneui/themed'
import React from 'react'
import { View } from 'react-native'

// import { Container } from './styles';

export const Home = () => {

    const { data, error, loading} = useAxios({url: 'https://v2.jokeapi.dev/joke/Any'})

    if (error) return <Text> ERROR ...</Text>

    return (
        <MainContainer>
            <HeaderDefault title='Home' />
            <MainBody >
                <Text>Home Page</Text>
                <Text>{data?.setup} : {data?.delivery} </Text>
                { loading && <LoadingSpinner />}
            </MainBody>
        </MainContainer>
    )
}