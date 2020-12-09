import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Card, Container, Modal, Row } from 'react-bootstrap'
import './LogIn.css'
import { Link } from 'react-router-dom'

const style = {
    marginTop: "50px"
}

function ModalSignUp(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Registrarse
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form >
                    <div className="container-form-signup">
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Nombre" size="md" className="input-form-signup" />
                        </Form.Group>
                        <Form.Group controlId="formBasicSurname">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" placeholder="Apellido" size="md" className="input-form-signup"/>
                        </Form.Group>
                    </div>
                    <div className="container-form-signup">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="nombre@ejemplo.com" size="md" className="input-form-signup"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Repetir email</Form.Label>
                            <Form.Control type="email" placeholder="nombre@ejemplo.com" size="md" className="input-form-signup" />
                        </Form.Group>
                    </div>
                    <div className="container-form-signup">
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Password" size="md" className="input-form-signup" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Repetir contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Password" size="md" className="input-form-signup" />
                    </Form.Group>
                    </div>
                    <div className="form-button">
                        <Button variant="success" type="submit">
                            Registrarse
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
                <h3>Iniciar sesión</h3>
            </Row>
            <Row className="justify-content-center">
                <Form className="signup-form">
                    <div className="form-link">
                        <Link to="#" onClick={() => setModalShow(true)} >¿Todavía no estás registrade?</Link>
                    </div>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="nombre@ejemplo.com" size="md" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" size="md" />
                    </Form.Group>
                    <div className="form-button">
                        <Button variant="success" type="submit" >
                            Submit
                        </Button>
                    </div>
                </Form>
                <ModalSignUp
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </Row>
        </Container>
    </>
}