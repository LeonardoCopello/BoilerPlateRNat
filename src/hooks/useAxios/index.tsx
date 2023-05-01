import React, { useEffect, useState } from 'react'
import axios from 'axios'

type Props = {
    url: string
}

export function useAxios <T>( props: Props ) {
    const { url } = props
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    
    const onLoad = async () => {
        console.log('onLoad')
        setLoading(true)
        await axios.get(url)
            .then((response) => {
                setData(response.data)
                setError(null)
            })
            .catch((error) => {
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }
        
    useEffect(() => {
        onLoad()
    },[url])

    return {
        data: data,
        loading: loading,
        error: error,
        onRefresh: onLoad
    }
}