import React from 'react';
import {Form, Button, Navbar, Nav, FormControl, NavDropdown, Image} from 'react-bootstrap';

import '../Header/header.css';

import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';



const Menu = () => {
  
  return (
    <>
      <div fixed="top">
        <Navbar bg="light" variant="light" className="topBarCover">
          <div className="container-fluid">
            <Nav className="mr-auto">
              <Nav.Link href="#myaccount">My Account</Nav.Link>
              <Nav.Link href="#mywishlist">My Wishlist</Nav.Link>
              <Nav.Link href="#mycart">My Cart</Nav.Link>
              <Nav.Link href="#checkouot">Checkout</Nav.Link>
              <Nav.Link href="#testimonial">Testimonial</Nav.Link>
              <Nav.Link href="#trackorder">Track Order</Nav.Link>
              <Nav.Link href="#catalogue">Catalogue</Nav.Link>
              <Nav.Link href="#allglass">All Glass</Nav.Link>
              <Nav.Link href="#upcomingshows">Upcoming Shows</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" size="sm" placeholder="Search" className="mr-sm-2" />
              <Button size="sm" variant="outline-info">Search</Button>
            </Form>
            <Button href="#" variant="danger" size="sm" className="loginBtn">Sign In</Button>
            <Button href="#" variant="info" size="sm" className="signupBtn">Sign Up</Button>
          </div>
        </Navbar>
        <StickyHeader
    // This is the sticky part of the header.
    header={
        <Navbar className="mainMenu">
          <div className="container-fluid">
            <Navbar.Brand href="#home">
              <img
                className="d-block w-100"
                src={require('./../../images/logo.jpeg').default}
                alt="First slide"
              />
            </Navbar.Brand>
            <Nav className="mainMenuLinks">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Up-Cycled Canvas Bag" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Men's Collection" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Leather & Hair On Bag" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#features">Footwear</Nav.Link>
              <Nav.Link href="#pricing">Belts</Nav.Link>
              <NavDropdown title="Jewellery" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Apparel" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Gift & Accessories" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>
        </Navbar>
      } /> 
      </div>
    </>
  );
}

export default Menu;