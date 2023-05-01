import React from 'react'
import { LoadingSpinner } from '@components/LoadingSpinner'
import { NoInternetConnection } from '@components/misc/NoInternetConnection'

interface IProps {
    loading: boolean
    error: string | null
    title?: string
    hideLoadingSpinner: boolean
    onRefresh: () => void
}


export const UserRequestFeedBack = ({error, loading, title, hideLoadingSpinner = false, onRefresh }: IProps) => {
    const showLoadingSpinner = () => {
        if (!hideLoadingSpinner && loading ) {
            return true
        }
    }
    return (
        <>
            { showLoadingSpinner() && <LoadingSpinner title={title ?? 'Aguarde...'}/> }
            { error && <NoInternetConnection onRefresh={onRefresh} />}
        </>
    )
}