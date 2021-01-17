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
              <NavDropdown.Item className="text-dropdown" eventKey="4.1"><Link className="text-link-title" to="/categories/mates"> Mates </Link></NavDropdown.Item>
              <NavDropdown.Item className="text-dropdown" eventKey="4.2"><Link className="text-link-title" to="/categories/bombillas">Bombillas</Link></NavDropdown.Item>
              <NavDropdown.Item className="text-dropdown" eventKey="4.3"><Link className="text-link-title" to="/categories/materas"> Materas</Link></NavDropdown.Item>
              <NavDropdown.Item className="text-dropdown" eventKey="4.3"><Link className="text-link-title" to="/categories/yerberas"> Yerberas </Link></NavDropdown.Item>            
            </NavDropdown>
            <Link to="/addproducts" className="text text-link-title"> <p className="text"> Nuevo producto </p></Link>
          </div>
          <div className="title-container">
            <Link className="text-link-title" to="/">  <h1 className="text"> TODO MATE</h1></Link>
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
