import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './ProductCard.css'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'

export default function ProductCard(props) {
    const {addProductToCart} = useCartContext()

    return <>

        <Card className="text-center product-card img-style ">
            <Card.Header as="h5" className="header"> {props.name} </Card.Header>
            <Link to={`/product/${props.id}`}><Card.Img variant="top" src={props.imageUrl} /></Link>
            <Card.Body>
                <Card.Title> $ {props.price}</Card.Title>

                <div className="buttons-container">
                    <Button
                        variant="success"
                        className="product-button">
                        Agregar
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-basket svg-button" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
                        </svg>
                    </Button>
                    <Link to={`/product/${props.id}`}>
                        <Button
                            variant="success"
                            className="product-button">
                            Detalle
                        </Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>

    </>
}