import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container, Modal, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './SignUp.css'

const style = {
    marginTop: "50px"
}

function ModalLogIn(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Iniciar sesión
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form >
                    <div className="container-form-login">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="nombre@ejemplo.com" size="md" className="input-form-login" />
                        </Form.Group>
                    </div>
                    <div className="container-form-login">
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Password" size="md" className="input-form-login" />
                        </Form.Group>
                    </div>
                    <div className="form-button">
                        <Button variant="success" type="submit">
                            Iniciar sesión
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
}


export default function SignUp() {
    const [modalShow, setModalShow] = useState(false);

    return <>
        <Container fluid style={style}>
            <Row className="justify-content-center">
                <h3>¡Registrate!</h3>
            </Row>
            <Row className="justify-content-center">

                <Form className="signup-form">
                    <div className="form-link">
                        <Link to="#" onClick={() => setModalShow(true)}>¿Ya estás registrade? Inicia sesión</Link>
                    </div>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" size="lg" />
                    </Form.Group>
                    <Form.Group controlId="formBasicSurname">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" placeholder="Apellido" size="lg" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="nombre@ejemplo.com" size="lg" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Repetir email</Form.Label>
                        <Form.Control type="email" placeholder="nombre@ejemplo.com" size="lg" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Password" size="lg" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Repetir contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Password" size="lg" />
                    </Form.Group>
                    <div className="form-button">
                        <Button variant="success" type="submit">
                            Crear cuenta
                        </Button>
                    </div>
                </Form>
                <ModalLogIn
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </Row>
        </Container>
    </>
}