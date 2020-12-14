import React from 'react'
import './ProductDetail.css'
import Counter from '../components/Counter'
import { Col } from 'react-bootstrap'
import ButtonAddToCart from './ButtonAddToCart'

export default function ProductDetail(props) {

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
                <ButtonAddToCart prod={props.prod} />
            </Col>
        </div>
    </>
}