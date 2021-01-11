import React from 'react'
import './ProductDetail.css'
import Counter from '../components/Counter'
import { Col } from 'react-bootstrap'
import ButtonAddToCart from './ButtonAddToCart'
import { useState } from 'react'


export default function ProductDetail(props) {
    const [ counter, setCounter ] = useState(1)

    function addProductQuantity(stock) {
        if (counter < stock) {
            const number = counter + 1
            setCounter(number)
        }
    }
    function removeProductQuantity() {
        if (counter > 1) {
            const number = counter -1
            setCounter(number)
        }
    }

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
                <Counter stock={props.prod.stock} counter={counter} removeProductQuantity={removeProductQuantity} addProductQuantity={addProductQuantity} />
                <ButtonAddToCart prod={props.prod} quantity={counter} />
            </Col>
        </div>
    </>
}