import { Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import './WithoutProducts.css'

export default function WithoutProducts({ category }) {
    return <>
        <Row className="WithoutProducts-container">
            <Col sm={12} md={12} lg={12} xl={12}>
                <h3 className="WithoutProducts-title">No hay {category} en stock</h3>
            </Col>
            <Col className="WithoutProducts-text" sm={12} md={12} lg={12} xl={12}>
                <p>Date una vuelta por nuestro catálogo</p>
            </Col>
            <Col className="WithoutProducts-button" sm={12} md={12} lg={12} xl={12}>
                <Link to={'/'}>
                    <Button variant="dark" type="button">
                        Volver
                    </Button>
                </Link>
            </Col>
        </Row>
    </>
}