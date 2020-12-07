import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import './Navbar.css'
import CartIcon from '../components/CartIcon';
import SignUpIcon from '../components/SignUpIcon';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidgetContainer from './CartWidgetContainer';

export default function NavMenu() {
  const [display, setDisplay] = useState("none")

  function showWhenHover() {
    if(display === "none") {
    setDisplay("block")
    } else {  
      setDisplay ("none")
    }
  }

  return (
    <>
      <Container fluid>
        <div bg="light" variant="dark" className="navbar-container" >
          <div className="categories-container">
            <Link to="/signup"> <p className="text"> Sign Up </p></Link>
            <Link to="/places"> <p className="text"> Places </p></Link>
            <Link to="/addplaces"> <p className="text"> New place </p></Link>
          </div>
          <div className="title-container">
            <Navbar.Brand href="/">  <p className="text"> Florería Carlitos</p></Navbar.Brand>
          </div>
          <div className="icons-container">
            <CartIcon showWhenHover={showWhenHover} />
            <SignUpIcon />
            <CartWidgetContainer display={display} />
          </div>
        </div>
      </Container>
    </>
  );
}
