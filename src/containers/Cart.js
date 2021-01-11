import React, { useEffect, useState } from 'react'
import { useCartContext } from '../context/CartContext'
import { Col, Row, Container, ListGroup, Button } from 'react-bootstrap';
import './Cart.css'
import { Link } from 'react-router-dom';

function FullCart() {
    const { cartList, totalPrice, deleteProduct, cleanList } = useCartContext()

    return <>
        <Col xs={6} md={6} lg={6} xl={6} className="title-cart-container">
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
                    <Col xs={4} md={4} lg={10} xl={10}>
                        <p onClick={() => deleteProduct(p)} className="cart-option-button">Eliminar</p>
                    </Col>
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
            <Button onClick={() => cleanList()} variant="success">Limpiar carrito</Button>

            <Link to="/checkout"> <Button variant="success">Continuar compra</Button> </Link>
        </div>
    </>
}

function EmptyCart() {
    return <>

        <Col xs={6} md={6} lg={6} xl={6} className="title-cart-container">
            <h3>No agregaste productos todavía</h3>
            <p>¡Date una vuelta por nuestro catálogo!</p>
        </Col>

    </>
}

export default function Cart() {
    const [full, setFull] = useState(false)
    const { cartList } = useCartContext()

    useEffect(() => {
        if (cartList.length !== 0) {
            setFull(true)
        } else
            setFull(false)

    }, [cartList])

    return <>
        <Container fluid>
            <Row noGutters className="row-container">
                {full ? <FullCart /> : <EmptyCart />}
            </Row>
    </Container >
    </>
}