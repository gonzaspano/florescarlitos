import React, {useContext, useState} from 'react'

export const CartContext = React.createContext()
export const useCartContext = () => useContext(CartContext)

export function CartContextProvider({children}) {
    const [products, setProducts] = useState([])
    const [productQuantity, setProductQuantity] = useState(1)
    const [totalQuantity, setTotalQuantity] = useState(0)

    function addProductQuantity(max) {
        if ( productQuantity < max)
        setProductQuantity(productQuantity + 1)
    }
    function removeProductQuantity() {
        if ( productQuantity > 1) {
            setProductQuantity(productQuantity -1)
        }
    }
    
    function addToCart(newProd, productQuantity){
        const compareIds = (prod) => prod.id === newProd.id
        const prodIndex = products.findIndex(compareIds)
        if (prodIndex === -1) {
            newProd.quantity = productQuantity
            const prodAdded = [...products, newProd]
            setProducts(prodAdded)
            addTotalQuantity()
        } else {
            products[prodIndex].quantity += productQuantity
            addTotalQuantity()
        }
        console.log(products)
    }

    function addTotalQuantity() {
        const number = totalQuantity + productQuantity
        setTotalQuantity(number)
    }

    function totalPrice() {
        return products.reduce((prev, next) => (prev + (next.quantity * next.price)))
    }

    return <>
        <CartContext.Provider value= {{ totalPrice, addProductQuantity, removeProductQuantity, productQuantity, addToCart, products, totalQuantity }}>
            {children}
        </CartContext.Provider>
    </>
}