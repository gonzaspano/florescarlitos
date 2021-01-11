import React, { useState, useContext, useEffect } from 'react'

export const CartContext = React.createContext()
export const useCartContext = () => useContext(CartContext)

export function CartContextProvider({ children }) {
    const [cartList, setCartList] = useState([])

    function addProductToCart(newProd, quantity) {
        const compareId = (p) => newProd.id === p.id
        const indexId = cartList.findIndex(compareId)
        if (indexId === -1) {
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
        const list = [...cartList]
        const compareId = (p) => prod.id === p.id
        const indexId = list.findIndex(compareId)
        if (indexId !== -1 && list[indexId].quantity === 1) {
            list.splice(indexId, 1)
        } else {
            list[indexId].quantity = list[indexId].quantity -1
        }
        setCartList(list)
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
            value={{ addProductToCart, cartList, setCartList, totalPrice, cleanList, deleteProduct }}>
            {children}
        </CartContext.Provider>
    </>
}