import React, { useState, useEffect } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { useCartContext } from '../context/CartContext'
import './Cart.css'

const EmptyCart = () => {
    return <>
        <Container fluid>
            <Row className="empty-cart-container">
                <div>
                    <h1>No hay productos seleccionados</h1>
                </div>
                <div>
                    <Button variant="dark" href="/">Volver al inicio</Button>
                </div>
            </Row>
        </Container>
    </>
}

const FullCart = () => {
    const { products, totalQuantity } = useCartContext()

    return <>
        <Container fluid>
            <Row className="empty-cart-container">
                <div>
                    {products.map((p) =>
                        <div key={p.id} >
                            <p> {p.name} </p>
                            <p> {p.price} </p>
                            <p> total: {totalQuantity} </p>
                        </div>
                    )}
                </div>
                <div>
                    <Button variant="dark">Comprar</Button>
                </div>
            </Row>
        </Container>
    </>
}

function Cart() {
    const [full, setFull] = useState(false)
    const { products, totalQuantity } = useCartContext()

    useEffect(() => {
        console.log(products)
        console.log(totalQuantity)

    }, [products, totalQuantity])

    return <>
        {/* {full ? <FullCart products={products} /> : <EmptyCart />} */}
        <div> {totalQuantity} </div>
    </>
}

export default Cart