import React from 'react'
import { Button, Text } from '@rneui/themed'
import { MainBody, MainContainer } from '@components/Containers'
import { HeaderDefault } from '@components/HeaderDefault'
import { LoadingSpinner } from '@components/LoadingSpinner'
import { IJokesData } from '@customTypes/screens/home'
import { useAxios } from '@hooks/useAxios'
import { NoInternetConnection } from '@components/misc/NoInternetConnection'

export const Home = () => {

    const { data, error, loading, onRefresh} = useAxios<IJokesData>({
        url: 'https://v2.jokeapi.dev/joke/Any'
    })

    return (
        <>
            <MainContainer>
                <HeaderDefault title='Home' />
                <MainBody >
                    <Text>Home Page</Text>
                    <Text>{data?.setup} : {data?.delivery} </Text>
                    { loading && <LoadingSpinner />}
                </MainBody>
                <Button title="Refetch" onPress={onRefresh} />
            </MainContainer>
            
            { error && <NoInternetConnection onRefresh={onRefresh} />}
        </>
    )
}