import React, { useEffect } from 'react'
import './ProductDetail.css'
import Counter from '../components/Counter'
import { Button, Col } from 'react-bootstrap'
import { useCartContext } from '../context/CartContext'

export default function ProductDetail(props) {
    const {addToCart, productQuantity, products} = useCartContext()

    useEffect(() => {
        console.log(products)
    }, [products])

    return <>
        <div className="product-detail-container">
            <Col className="img-product-container">
                <img src={props.prod.imageUrl} alt="producto" className="img-product-detail" />
            </Col>
            <Col className="detail-product-container">
                <div>
                    <h3> {props.prod.name} </h3>
                </div>
                <div className="description-container">
                    <p> {props.prod.description}</p>
                </div>
                <Counter stock={props.prod.stock} />
                <div className="buyButton-Container">
                    <Button variant="dark" onClick={() => addToCart(props.prod, productQuantity)}>
                        Agregar al carrito
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-basket" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
                        </svg>
                    </Button>
                </div>
            </Col>
        </div>
    </>
}