import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'
import places from '../models/Places'

const style = {
    marginTop: "50px"
}

export default function ProductCardContainer() {

    return <>
        <Container fluid style={style}>
            <Row className="justify-content-between" style={style}>

                {places.map((p) =>
                    <ProductCard
                        key={p.id}
                        id= {p.id}
                        name={p.name}
                        description={p.description}
                        imageUrl={p.imageUrl} />
                )}
            </Row>
        </Container>
    </>
}