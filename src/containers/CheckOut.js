import React from 'react'
import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './CheckOut.css'

function FormCheckOut() {
    return <>
        <Col xs={12} sm={12} lg={12} xl={12} >
            <p>Completa tus datos</p>
        </Col>
        <Col xs={12} sm={12} lg={12} xl={12}>
            
        </Col>

    </>
}

function PaymentMethod() {
    return <>

        <Col xs={6} md={6} lg={6} xl={6}>
            <h3>Forma de entrega</h3>
            <div>
                <p>Retiro en local</p>
                <p>Entrega a domicilio</p>
                <p>Correo Argentino</p>
            </div>
        </Col>
        <Col xs={6} md={6} lg={6} xl={6}>
            <h3>Método de pago</h3>
        </Col>
    </>
}

export default function CheckOut() {
    const [user, setUser] = useState(false)
    return <>
        <Container fluid>
            <Row noGutters className="checkout-container">
                {user ? <PaymentMethod /> : <FormCheckOut />}
            </Row>
        </Container>
    </>
}