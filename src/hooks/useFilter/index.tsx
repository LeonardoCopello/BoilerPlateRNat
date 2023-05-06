import { TypeSearch } from '@components/Search'
import { useEffect, useState } from 'react'

type IProps <T> = {
  originalList: T[]
  propName: keyof T
  typeSearch: TypeSearch
}
/**
 * @param originalList Lista a ser Filtrada
 * @param propName propriedade da lista a ser filtrada 
 * @param typeSearch propriedade que define o tipo de filtro
 * @returns filteredList - Lista
 * @returns search - input da busca digitado pelo usuário
 * @returns setSearch - muda estado do search
 * @returns isSearching - true durante filtragem
 */
export const useFilter = <T extends Record<string, any>>({ originalList, propName, typeSearch }: IProps<T>) => {

    const [isSearching, setIsSearching] = useState(false)
    const [search, setSearch] = useState('')
    const [filteredList, setFilteredList] = useState<T[]>(originalList)

    const resetFilteredList = () => {
        setFilteredList([])
    }
    console.log('search', search)
    useEffect(() => {
        if(typeSearch === 'code') {
            setIsSearching(true)
            if (search === '') {
                setFilteredList(originalList)
                setIsSearching(false)
            } else {
                setFilteredList(
                    originalList.filter((item) => item[propName].toString() === search)
                )
                setTimeout(() => {
                    setIsSearching(false)
                }, 500)
            }
        }
        if (typeSearch === 'text') {
            setIsSearching(true)
            if (search === '') {
                setFilteredList(originalList)
                setIsSearching(false)
            } else {
                setFilteredList( 
                    originalList.filter((item) => {
                        if (
                            item[propName].toLowerCase().indexOf(search.toLowerCase()) >
                  -1
                        ) {
                            return true
                        } else {
                            return false
                        }
                    }),
                )
                setTimeout(() => {
                    setIsSearching(false)
                }, 500)
            }
        }
    }, [search, originalList])

    return {
        filteredList: filteredList,
        search: search,
        resetFilteredList: resetFilteredList,
        setSearch: setSearch,
        isSearching: isSearching

    }
}