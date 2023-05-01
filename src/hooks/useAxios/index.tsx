import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { LoadingSpinner } from '@components/LoadingSpinner'

interface IProps {
    url: string
}

export const useAxios = ( props: IProps ) => {
    const { url } = props
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    useEffect(() => {
        setLoading(true)
        axios.get(url)
            .then((response) => {

                setData(response.data)
            })
            .catch((error) => {
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
    },[url])    

    return {
        data: data,
        loading: loading,
        error: error
    }
}