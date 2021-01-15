import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Row } from 'react-bootstrap'
import './TaskForm.css'

export default function TaskForm() {
    const [name, setName] = useState("")
    const [descr, setDescr] = useState("")
    const [stock, setStock] = useState("")
    const [price, setPrice] = useState("")
    const [img, setImg] = useState("")
    const [cat, setCat] = useState("")

    /*    const handlerForm = (e) => e.preventDefault()
    
        function createProduct(e) {
    
            const product = {
                name: name,
                description: descr,
                imgUrl: img,
                stock: stock,
                price: price,
                category: cat
            }
    
            fetch('http://localhost:5000/api/products/add', {
                method: "POST",
                body: JSON.stringify(product),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .catch(err => console.log(err))
                    .then(res => res.json())
                    .then(response => console.log(response)) 
        } */

    return <>

        <Row className="justify-content-center">
            <Form /* onSubmit={handlerForm} */ >

            <div className="form-formcontainer">
                <div className="form-subcontainer">
                    <Form.Group controlId="formBasicTask">
                        <Form.Label>Nombre del producto</Form.Label>
                        <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Producto" size="sm" />
                    </Form.Group>

                    <Form.Group controlId="formBasicDetail">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control onChange={(e) => setDescr(e.target.value)} type="text" placeholder="Breve descripción" size="sm" />
                    </Form.Group>

                    <Form.Group controlId="formBasicDetail">
                        <Form.Label>Stock</Form.Label>
                        <Form.Control onChange={(e) => setStock(e.target.value)} type="text" placeholder="Cantidad" size="sm" />
                    </Form.Group>

                </div>

                <div className="form-subcontainer">

                    <Form.Group controlId="formBasicDetail">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Precio" size="sm" />
                    </Form.Group>

                    <Form.Group controlId="formBasicDetail">
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control onChange={(e) => setCat(e.target.value)} type="text" placeholder="Precio" size="sm" />
                    </Form.Group>

                    <Form.Group controlId="formBasicDetail">
                        <Form.Label>Agregar foto</Form.Label>
                        <Form.Control onChange={(e) => setImg(e.target.value)} type="text" placeholder="Foto" size="sm" />
                    </Form.Group>

                </div>
            </div>
                <div className="form-buttoncontainer">
                    <Button variant="dark" type="submit">
                        Agregar
                </Button>
                </div>
            </Form>
        </Row>
    </>
}