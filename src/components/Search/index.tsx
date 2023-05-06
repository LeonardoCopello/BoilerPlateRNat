import React from 'react'
import { ListItem, SearchBar, useTheme } from '@rneui/themed'

export type TypeSearch = 'code' | 'text' | 'mixed'

interface IProps {
    setSearch: any
    isSearching: boolean
    search: string
    typeSearch: TypeSearch
    placeholder: string
}
/**
 * @param setSearch
 * @param isSearching - Boleano quando estiver procurando
 * @param search - Valor a ser buscado
 * @param typeSearch - Tipo de valor a ser buscado (texto, código ou misturado)
 * @param placeholder - Placeholder do input
 */

export const SearchComponent = (props: IProps) => {
    const {setSearch, isSearching, search, typeSearch, placeholder } = props
    const { theme } = useTheme()
    return (
        <SearchBar
            platform='default'
            keyboardType={typeSearch === 'code' ? 'numeric' : 'default'}
            lightTheme
            loadingProps={{}}
            onChangeText={(text) => setSearch(text.toString())}
            placeholder={placeholder}
            placeholderTextColor={theme.colors.grey3}
            showLoading={isSearching}
            round
            value={search}
        />
    )
}