import React from 'react'
import { Modal, Col, Row, Container, Button } from 'react-bootstrap';
import './CartWidgetContainer.css'

export default function CartWidgetContainer(props) {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Carro de compras
                 </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Row>
                        <Col xs={12} md={10}>
                            <p>Florero x5</p>
                        </Col>
                        <Col xs={6} md={2}>
                            <p>$1000</p>
                        </Col>
                        <Col xs={12} md={10}>
                            <p>Florero x5</p>
                        </Col>
                        <Col xs={6} md={2}>
                            <p>$1000</p>
                        </Col>
                        <Col xs={12} md={10}>
                            <p>Florero x5</p>
                        </Col>
                        <Col xs={6} md={2}>
                            <p>$1000</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={10}>
                            <p>Total:</p>
                        </Col>
                        <Col xs={6} md={2}>
                            <p>$3000</p>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button href="/cart" variant="dark">Finalizar compra</Button>
                <Button variant="dark" onClick={props.onHide}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    );
}

/* function CartWidgetContainer({ display }) {

    const styleDisplay = { display: display }

    return <>
        <ListGroup className="cart-container" variant="flush" style={styleDisplay} >
            <ListGroup.Item>Productos agregados</ListGroup.Item>
            <ListGroup.Item className="item-cart-container">
                <div>
                    <p>Florero x5</p>
                </div>
                <div>
                    <p>$1000</p>
                </div>
            </ListGroup.Item>
            <ListGroup.Item className="item-cart-container">
                <div>
                    <p>Florero x5</p>
                </div>
                <div>
                    <p>$1000</p>
                </div>
            </ListGroup.Item>
            <ListGroup.Item className="item-cart-container">
                <div>
                    <p>Florero x5</p>
                </div>
                <div>
                    <p>$1000</p>
                </div>
            </ListGroup.Item>
            <ListGroup.Item variant="success" className="item-cart-container">
                <div>
                    <p>Total:</p>
                </div>
                <div>
                    <p>$1000</p>
                </div>
            </ListGroup.Item>
        </ListGroup>
    </>
} */