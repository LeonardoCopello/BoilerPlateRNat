import React from 'react'
import { Button, Text } from '@rneui/themed'
import { MainBody, MainContainer } from '@components/Containers'
import { HeaderDefault } from '@components/HeaderDefault'
import { IJokesData } from '@customTypes/screens/home'
import { useAxios } from '@hooks/useAxios'
import { UserRequestFeedBack } from '@components/UserRequestFeedBack'

export const Home = () => {

    const { data, error, loading, onRefresh} = useAxios<IJokesData>({
        url: 'https://v2.jokeapi.dev/joke/Any'
    })

    return (
        <MainContainer>
            <HeaderDefault title='Home' />
            <MainBody >
                <Text>{data?.setup} : {data?.delivery} </Text>
            </MainBody>
            <Button title="Refetch" onPress={onRefresh} />
            <UserRequestFeedBack 
                loading={loading} 
                error={error}
                hideLoadingSpinner={false}
                onRefresh={onRefresh}
            />
        </MainContainer>
    )
}