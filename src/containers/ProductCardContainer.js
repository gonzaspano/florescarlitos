import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'
import { useSearchContext } from '../context/SearchContext'
import products from '../models/Places'
import CartWidgetContainer from './CartWidgetContainer'

const style = {
    marginTop: "50px",
}

export default function ProductCardContainer() {
    const { searchInput } = useSearchContext()

    useEffect(() => {

    },[searchInput]) 

    return <>
        <Container fluid style={style}>

            <Row className="justify-content-between" style={style}>
                {products
                .filter(p => {return p.name.toLowerCase().indexOf(searchInput) >= 0 })
                .map((p) =>
                    <ProductCard
                        key={p.id}
                        id= {p.id}
                        name={p.name}
                        description={p.description}
                        price={p.price}
                        imageUrl={p.imageUrl} />
                )}
            </Row>
        </Container>
    </>
}