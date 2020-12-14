import React, { useState, useContext, useEffect } from 'react'

export const CartContext = React.createContext()
export const useCartContext = () => useContext(CartContext)

export function CartContextProvider({ children }) {
    const [cartList, setCartList] = useState([])


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

    function deleteProduct(prod) {
        const compareId = (p) => prod.id === p.id
        const indexId = cartList.findIndex(compareId)
        if (indexId !== -1 && cartList[indexId].quantity === 1) {
            cartList.splice(indexId, 1)
        } else if(indexId !== -1 && cartList[indexId].quantity > 1) {
            cartList[indexId].quantity = cartList[indexId].quantity -1
        }
    }

    function cleanList() {
        setCartList([])
    }

    function totalPrice() {
        return cartList.reduce((prev, next) => (prev + (next.price * next.quantity)),0)        
    }

    useEffect(() => {
        console.log(cartList)
    }, [cartList])

    return <>
        <CartContext.Provider 
            value={{ addProductToCart, cartList, setCartList, totalPrice, cleanList }}>
            {children}
        </CartContext.Provider>
    </>
}