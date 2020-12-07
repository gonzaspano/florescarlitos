import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import './CartWidgetContainer.css'

export default function CartWidgetContainer({display}) {

    const styleDisplay={display: display}

    return <>
        <ListGroup className="cart-container" variant="flush" style={styleDisplay} >
            <ListGroup.Item>Productos agregados</ListGroup.Item>
            <ListGroup.Item className="item-cart-container">
                <div>
                    <p>Florero x5</p>
                </div>
                <div>
                    <p>$1000</p>
                </div>
            </ListGroup.Item>
            <ListGroup.Item className="item-cart-container">
                <div>
                    <p>Florero x5</p>
                </div>
                <div>
                    <p>$1000</p>
                </div>
            </ListGroup.Item>
            <ListGroup.Item className="item-cart-container">
                <div>
                    <p>Florero x5</p>
                </div>
                <div>
                    <p>$1000</p>
                </div>
            </ListGroup.Item>
            <ListGroup.Item variant="success" className="item-cart-container">
                <div>
                    <p>Total:</p>
                </div>
                <div>
                    <p>$1000</p>
                </div>
            </ListGroup.Item>
        </ListGroup>
    </>
}