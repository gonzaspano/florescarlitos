import React, { useState } from 'react';
import './Navbar.css'
import CartIcon from '../components/CartIcon';
import SignUpIcon from '../components/SignUpIcon';
import { Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidgetContainer from './CartWidgetContainer';

export default function NavMenu() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Container fluid>
        <div bg="light" variant="dark" className="navbar-container" >
          <div className="categories-container">
            <NavDropdown className="text text-dropdown" title="Categorías" id="nav-dropdown">
              <NavDropdown.Item className="text-dropdown" eventKey="4.1"><Link to="/categories/regalos"> Regalos </Link></NavDropdown.Item>
              <NavDropdown.Item className="text-dropdown" eventKey="4.2"><Link to="/categories/condolencias">Condolencias</Link></NavDropdown.Item>
              <NavDropdown.Item className="text-dropdown" eventKey="4.3"><Link to="/categories/eventos"> Eventos</Link></NavDropdown.Item>
            </NavDropdown>
            <Link to="/addproducts" className="text"> <p className="text"> Nuevo producto </p></Link>
          </div>
          <div className="title-container">
            <Link to="/">  <h1 className="text"> Florería Carlitos</h1></Link>
          </div>
          <div className="icons-container">
            <CartIcon displayCart={() => setModalShow(true)} />
            <SignUpIcon />
          </div>
          <CartWidgetContainer show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </Container>
    </>
  );
}
