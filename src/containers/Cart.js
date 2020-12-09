import React, {useEffect} from 'react'
import { useCartContext } from '../context/CartContext'

export default function Cart() {
    const {addToCart, productQuantity, products, totalPrice, totalQuantity} = useCartContext()

    useEffect(() => {
        console.log(products)
    }, [products])    

    return <>
        <div> total: {totalQuantity} </div>
    </>
}