import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './MainHome.css'

export default function MainHome() {

    return <>
        <Container fluid>
            <Row className="mainhome-title-container">
                <Col sm={4} md={4} lg={4} xl={4}>
                    <h3>Arreglos florales a tu medida</h3>
                </Col>
            </Row>
            <Row className="mainhome-text-container">
                <Col sm={6} md={6} lg={6} xl={6}>
                    <p>Más de 40 años en el rubro nos avalan como uno de las florerías mas experimentadas.</p>
                    <p>Desde el sur de la Provincia de Buenos Aires, 
                        nuestros trabajos llegan a cualquier parte del país
                    </p>
                </Col>
            </Row>
        </Container>
    </>
}