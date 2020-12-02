import React, {useContext, useState} from 'react'

export const CartContext = React.createContext()
export const useCartContext = () => useContext(CartContext)

export function CartContextProvider({children}) {
    const [products, setProducts] = useState([])
    const [productQuantity, setProductQuantity] = useState(0)

    function addProduct() {
        if ( productQuantity <= 10)
        setProductQuantity(productQuantity + 1)
        console.log(productQuantity)
    }
    function removeProduct() {
        if ( productQuantity >= 1) {
            setProductQuantity(productQuantity -1)
        }
    }

    return <>
        <CartContext.Provider value= {{addProduct, removeProduct, productQuantity, setProducts, products }}>
            {children}
        </CartContext.Provider>
    </>
}