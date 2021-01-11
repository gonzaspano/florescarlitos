import { Container, Row } from "react-bootstrap";

export default function Footer() {
    const yearnow = new Date()
    const year = yearnow.getFullYear();

    return <>
        <Container fluid>
            <Row>
                <p>Copyright © {year} SpanoG  </p>
            </Row>
        </Container>
    </>
}
