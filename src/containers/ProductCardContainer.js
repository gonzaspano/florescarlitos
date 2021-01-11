import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'
import { useProductsContext } from '../context/ProductsContext'
import { useSearchContext } from '../context/SearchContext'

const style = {
    marginTop: "50px",
}

export default function ProductCardContainer() {
    const { searchInput } = useSearchContext()
    const {prods} = useProductsContext()

    useEffect(() => {

    },[searchInput, prods]) 

    return <>
        <Container fluid style={style}>

            <Row className="justify-content-around" style={style}>
                {prods
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