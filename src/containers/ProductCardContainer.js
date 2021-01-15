import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'
import { useProductsContext } from '../context/ProductsContext'
import { useSearchContext } from '../context/SearchContext'
import './ProductCardContainer.css'

export default function ProductCardContainer() {
    const { searchInput } = useSearchContext()
    const {prods} = useProductsContext()

    useEffect(() => {

    },[searchInput, prods]) 

    return <>
        <Container fluid className="productcardcontainer-container">

            <Row className="justify-content-around productcardcontainer-row">
                <Col sm={12} md={12} lg={12} xl={12}>
                    <h3 className="product-title-cardcontainer">Nuestros productos</h3>
                </Col>
                {prods
                .filter(p => {return p.name.toLowerCase().indexOf(searchInput) >= 0 })
                .map((p) =>
                    <ProductCard
                        key={p.id}
                        prod={p} />
                )}
            </Row>
        </Container>
    </>
}