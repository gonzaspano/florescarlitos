import React from 'react'
import { Container, Row } from 'react-bootstrap'
import UserCard from '../components/UserCard'

const style = {
    marginTop: "50px"
}

export default function UsersList() {

    return <>
        <Container fluid style={style}>
            <Row className="justify-content-center">
                <h1>Lista de Usuarios</h1>
            </Row>
            <Row className="justify-content-center" style={style}>
                <UserCard />
            </Row>
        </Container>
    </>
}