import React, { useState, useContext, useEffect } from 'react'

export const CartContext = React.createContext()
export const useCartContext = () => useContext(CartContext)

export function CartContextProvider({ children }) {
    const [cartList, setCartList] = useState([])
    const [productQuantity, setProductQuantity] = useState(1)

    function addProductQuantity(stock) {
        if (productQuantity < stock) {
            const number = productQuantity + 1
            setProductQuantity(number)
        }
    }
    function removeProductQuantity() {
        if (productQuantity > 1) {
            const number = productQuantity -1
            setProductQuantity(number)
        }
    }
    function addProductToCart(newProd, quantity) {
        const compareId = (p) => newProd.id === p.id
        const indexId = cartList.findIndex(compareId)
        if (indexId == -1) {
            const prod = newProd
            prod.quantity = quantity
            const prodList = [...cartList, prod]
            setCartList(prodList)
        }
        else {
            cartList[indexId].quantity = cartList[indexId].quantity + quantity
        }
    }

    useEffect(() => {
        console.log(cartList)
    }, [cartList])

    return <>
        <CartContext.Provider 
            value={{ productQuantity, addProductQuantity, removeProductQuantity, addProductToCart, cartList, setCartList }}>
            {children}
        </CartContext.Provider>
    </>
}