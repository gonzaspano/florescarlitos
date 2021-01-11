import { useEffect } from 'react'
import { useContext, useState, createContext } from 'react'
import { useParams } from 'react-router-dom'

export const ProductsContext = createContext([])
export const useProductsContext = () => useContext(ProductsContext)

export function ProductsContextProvider({ children }) {
    const [prods, setProds] = useState([])

//  HAY Q FILTRAR POR CATEGORY 
/*     const { category }= useParams()
    console.log(category) */

    useEffect(() => {
        fetch('http://localhost:5000/api/products/all')
        .then(response => response.json())
        .then(json =>  setProds(json.DUMMY_PRODUCTS))
    }, [])

    return <>
        <ProductsContext.Provider value={{ prods }}>
            {children}
        </ProductsContext.Provider>
    </>
}