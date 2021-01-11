import React, { useContext, useState } from 'react'

export const SearchContext = React.createContext()
export const useSearchContext = () => useContext(SearchContext)

export function SearchContextProvider( {children} ) {
    const [searchInput, setSearchInput] = useState("")

    function getInputValue(e) {
        setSearchInput(e.target.value)
    }

    return <>
        <SearchContext.Provider value={{ getInputValue, searchInput }}>
            {children}
        </SearchContext.Provider>
    </>
}