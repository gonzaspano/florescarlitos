import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Navbar.css'
import CartIcon from '../components/CartIcon';

export default function NavMenu() {

  return (
    <>
      <Navbar bg="light" variant="dark" className="navbar-container justify-content-between" >
        <Nav>
          <Nav.Link href="/signup"> <p className="text"> Sign Up </p></Nav.Link>
          <Nav.Link href="/places"> <p className="text"> Places </p></Nav.Link>
          <Nav.Link href="/addplaces"> <p className="text"> New place </p></Nav.Link>
        </Nav>
          <Navbar.Brand href="/">  <p className="text"> Florería Carlitos</p></Navbar.Brand>
        <CartIcon/>
      </Navbar>
    </>
  );
}
