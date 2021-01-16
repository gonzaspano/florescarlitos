import React from 'react'
import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CheckOut.css'

function FormCheckOut() {
    return <>
        <Col xs={12} sm={12} lg={12} xl={12} >
            <p className="checkout-title-guest">Completa tus datos como invitado</p>
        </Col>
        <Col xs={12} sm={12} lg={8} xl={8}>
            <Form >
                <div className="checkout-form-container">
                    <div className="checkout-form-subcontainer">
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Nombre" size="sm" />
                        </Form.Group>
                        <Form.Group controlId="formBasicSurname">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" placeholder="Apellido" size="sm" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="nombre@ejemplo.com" size="sm" />
                        </Form.Group>

                    </div>

                    <div className="checkout-form-subcontainer">

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Repetir email</Form.Label>
                            <Form.Control type="email" placeholder="nombre@ejemplo.com" size="sm" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Celular</Form.Label>
                            <Form.Control type="text" placeholder="Celular" size="sm" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Teléfono alternativo</Form.Label>
                            <Form.Control type="text" placeholder="Teléfono" size="sm" />
                        </Form.Group>

                    </div>

                    <div className="checkout-form-subcontainer">

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control type="text" placeholder="Dirección" size="sm" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Ciudad</Form.Label>
                            <Form.Control type="text" placeholder="Ciudad" size="sm" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Localidad</Form.Label>
                            <Form.Control type="text" placeholder="Localidad" size="sm" />
                        </Form.Group>

                    </div>

                    <div className="checkout-form-subcontainer">

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Provincia</Form.Label>
                            <Form.Control type="text" placeholder="Provincia" size="sm" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Código postal</Form.Label>
                            <Form.Control type="text" placeholder="Código postal" size="sm" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>País</Form.Label>
                            <Form.Control type="text" placeholder="Código postal" size="sm" />
                        </Form.Group>

                    </div>
                </div>
                <div className="checkout-buttoncontainer">
                    <Button variant="dark" type="submit">
                        Finalizar compra
                    </Button>
                    <Link to={'/signup'}> <Button className="button-login-checkout" variant="dark" type="button">
                        Crear usuario
                    </Button> </Link>
                </div>
            </Form>
        </Col>

    </>
}

function PaymentMethod() {
    return <>

        <Col xs={6} md={6} lg={6} xl={6}>
            <h5 className="checkout-title-guest">Forma de entrega</h5>
            <div className="checkout-paymentway-container">
                <Form.Control className="paymentway-form-user" as="select" size="sm">
                    <option>Retiro en local</option>
                    <option>Entrega a domicilio</option>
                </Form.Control>
            </div>
        </Col>
        <Col xs={6} md={6} lg={6} xl={6}>
            <h5 className="checkout-title-guest">Método de pago</h5>
            <div className="checkout-paymentway-container">
                <Form.Control className="paymentway-form-user" as="select" size="sm">
                    <option>Efectivo</option>
                    <option>Tarjeta de crédito</option>
                    <option>Transferencia bancaria</option>
                </Form.Control>
            </div>
        </Col>
    </>
}

export default function CheckOut() {
    const [user, setUser] = useState(false)
    return <>
        <Container fluid>
            <Row noGutters className="checkout-container justify-content-center">
                {user ? <PaymentMethod /> : <FormCheckOut />}
            </Row>
        </Container>
    </>
}