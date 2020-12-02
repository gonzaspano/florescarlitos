import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container, Row } from 'react-bootstrap'

export default function TaskForm() {
    return <>

        <Row className="justify-content-center">
            <Form>
                <Form.Group controlId="formBasicTask">
                    <Form.Label>Nombre del lugar</Form.Label>
                    <Form.Control type="text" placeholder="place" size="lg" />
                </Form.Group>

                <Form.Group controlId="formBasicDetail">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" placeholder="Detail" size="lg" />
                </Form.Group>

                <Form.Group controlId="formBasicDate">
                    <Form.File id="exampleFormControlFile1" label="Agregar foto" />
                </Form.Group>

                <Button variant="dark" type="submit">
                    Submit
                    </Button>
            </Form>
        </Row>
    </>
}