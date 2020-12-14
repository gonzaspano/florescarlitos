import React from 'react'
import { useCartContext } from '../context/CartContext'
import { Col, Row, Container } from 'react-bootstrap';

export default function Cart() {
    const { cartList, productQuantity } = useCartContext()
    console.log(cartList)
    return <>
        <Container>
            <Row>
                {cartList.map((p, i) =>
                    <div key={i} className="prod-container">
                        <Col xs={12} md={10}>
                            <p>{p.name} x {p.quantity}</p>
                        </Col>
                        <Col xs={6} md={2}>
                            <p>${p.price * p.quantity}</p>
                        </Col>
                    </div>
                )}
                <p>cart: {productQuantity}</p>
            </Row>
        </Container>
    </>
}