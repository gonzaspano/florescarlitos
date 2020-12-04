import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './ProductCard.css'
import Counter from './Counter'

export default function ProductCard(props) {

    return <>

            <Card className="text-center product-card img-style ">
                <Card.Header as="h5"> {props.name} </Card.Header>
                <Card.Link href={`/product/${props.id}`}><Card.Img variant="top" src={props.imageUrl} /></Card.Link>
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                    {props.description}    
                    </Card.Text>
                    <Counter/>
                    <Button variant="dark" className="product-button">Agregar</Button>
                    <Button href={`/product/${props.id}`} variant="primary" className="product-button">Detalle</Button>
                    <Button variant="danger" className="product-button">Eliminar</Button>
                </Card.Body>
                <Card.Footer className="text-muted">Última actualización: </Card.Footer>
            </Card>

    </>
}