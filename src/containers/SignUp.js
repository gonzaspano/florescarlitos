import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container, Modal, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './SignUp.css'
import SignUpForm from '../components/SignUpForm'


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

    function showModal() {
        setModalShow(true)
    }

    return <>
        <Container fluid className="signup-container" >
            <Row className="justify-content-center">
                <h3>¡Registrate!</h3>
            </Row>
            <Row className="justify-content-center">
            <div className="form-link">
                <Link to="#" onClick={() => showModal()}>¿Ya estás registrade? Inicia sesión</Link>
            </div>
            </Row>
            <Row className="justify-content-center">


                <SignUpForm showModal={showModal}/>

                <ModalLogIn
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </Row>
        </Container>
    </>
}