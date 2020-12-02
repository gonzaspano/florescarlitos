import React from 'react'
import TaskForm from '../components/TaskForm'
import { Container, Row } from 'react-bootstrap'

const style = {
    marginTop: "50px"
}

export default function AddPlace() {
    return <>
        <Container fluid style={style}>
            <Row className="justify-content-center">
                <h3>Agregate uno</h3>
            </Row>
            <TaskForm />
        </Container>
    </>
}