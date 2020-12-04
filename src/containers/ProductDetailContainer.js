import React, {useEffect, useState} from 'react'
import { Container, Row } from 'react-bootstrap'
import ProductDetail from '../components/ProductDetail'
import './ProductDetailContainer.css'
import { useParams } from 'react-router-dom'
import places from '../models/Places'

export default function ProductDetailContainer() {
    const [prod, setProd] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const product = places.filter(p => p.id === id)
        setProd(...product)
    }, [id])

    return <>
        <Container fluid className="product-detail-container">
            <Row noGutters>
                <ProductDetail prod={prod}/>
            </Row>
        </Container>
    </>
}