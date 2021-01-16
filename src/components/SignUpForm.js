import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './SignUpForm.css'

export default function SignUpForm() {

    return <>

        <Form >
            <div className="signup-formcontainer">
                <div className="signup-subcontainer">
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

                <div className="signup-subcontainer">

                    <Form.Group controlId="repeatFormBasicEmail">
                        <Form.Label>Repetir email</Form.Label>
                        <Form.Control type="email" placeholder="nombre@ejemplo.com" size="sm" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Password" size="sm" />
                    </Form.Group>
                    <Form.Group controlId="repeatFormBasicPassword">
                        <Form.Label>Repetir contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Password" size="sm" />
                    </Form.Group>

                </div>
            </div>
            <div className="signup-buttoncontainer">
                <Button variant="dark" type="submit">
                    Crear cuenta
                </Button>
            </div>
        </Form>

    </>
}