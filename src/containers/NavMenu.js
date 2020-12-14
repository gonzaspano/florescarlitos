import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import './Navbar.css'
import CartIcon from '../components/CartIcon';
import SignUpIcon from '../components/SignUpIcon';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidgetContainer from './CartWidgetContainer';

export default function NavMenu() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Container fluid>
        <div bg="light" variant="dark" className="navbar-container" >
          <div className="categories-container">
            <Link to="/" className="text"> <p className="text"> Home </p></Link>
            <Link to="/places" className="text"> <p className="text"> Places </p></Link>
            <Link to="/addplaces" className="text"> <p className="text"> New place </p></Link>
            <Link to="/cart" className="text"> <p className="text"> Cart </p></Link>
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
