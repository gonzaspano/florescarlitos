import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container, Row } from 'react-bootstrap'
import './LogIn.css'
import { Link } from 'react-router-dom'

const style = {
    marginTop: "50px"
}

export default function SignUp() {
    return <>
        <Container fluid style={style}>
            <Row className="justify-content-center">
                <h3>Iniciar sesión</h3>
            </Row>
            <Row className="justify-content-center">

                <Form className="signup-form">
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
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" size="lg" />
                    </Form.Group>
                    <div className="form-button">
                        <Button variant="success" type="submit" >
                            Submit
                        </Button>
                    </div>
                    <div className="form-link">
                        <Link to="/signup">¿Todavía no estás registrade?</Link>
                    </div>
                </Form>
            </Row>
        </Container>
    </>
}