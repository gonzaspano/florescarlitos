import { Container, Row} from "react-bootstrap";
import '../containers/Footer.css'

export default function Footer() {
    const yearnow = new Date()
    const year = yearnow.getFullYear();

    return <>
        <Container fluid>
            <div class="footer-container">
                <p>Copyright © {year} SpanoG  </p>
            </div>
        </Container>
    </>
}
