import React from 'react'
import { useCartContext } from '../context/CartContext'
import { Col, Row, Container, ListGroup, Button } from 'react-bootstrap';
import './Cart.css'

export default function Cart() {
    const { cartList, totalPrice } = useCartContext()

    return <>
        <Container fluid>
            <Row noGutters className="row-container">
                <Col xs={6} md={6} lg={6} xl={6}  className="title-cart-container">
                    <h3>Agregaste a tu carrito</h3>
                </Col>

                <ListGroup variant="flush">
                    {cartList.map((p, i) =>
                        <ListGroup.Item key={i}>
                            <div className="cart-container">
                                <Col xs={4} md={4} lg={10} xl={10}>
                                    {p.name} x {p.quantity}
                                </Col>
                                <Col xs={4} md={4} lg={10} xl={10}>
                                    ${p.price * p.quantity}
                                </Col>
                            </div>
                        </ListGroup.Item>
                    )}
                    <ListGroup.Item>
                        <div >
                            <Col xs={12} md={12} lg={12} xl={12}>
                                Total: {totalPrice()}
                            </Col>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
                <div>
                    <Button variant="success">Continuar compra</Button>
                </div>
            </Row>
        </Container>
    </>
}