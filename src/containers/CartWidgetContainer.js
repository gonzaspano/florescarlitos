import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Modal, Col, Row, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import './CartWidgetContainer.css'

export default function CartWidgetContainer(props) {
    const [full, setFull] = useState(true)
    const { cartList, totalPrice, cleanList } = useCartContext()

    useEffect(() => {
        if(cartList.length === 0) {
            setFull(false)
        }
    },[cartList])

    return <>
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Carro de compras
                 </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Row>
                        { cartList.map((p, i) =>
                            <div key={i} className="prod-container">
                                <Col xs={12} md={10}>
                                    <p>{p.name} x {p.quantity}</p>
                                </Col>
                                <Col xs={6} md={2}>
                                    <p>${p.price * p.quantity}</p>
                                </Col>
                            </div>
                        ) }
                    </Row>
                    <Row>
                        <Col xs={12} md={10}>
                            <p>Total:</p>
                        </Col>
                        <Col xs={6} md={2}>
                            <p>$ {totalPrice()}</p>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Link to="/cart"><Button onClick={props.onHide} variant="dark">Finalizar compra</Button> </Link>
                <Button variant="dark" onClick={() => cleanList()}>Limpiar</Button>
                <Button variant="dark" onClick={props.onHide}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    </>;
}