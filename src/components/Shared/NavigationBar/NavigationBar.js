import React from "react";
import "./NavigationBar.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavigationBar = () => {
 return (
  <div>
   <Navbar expand="lg">
    <Container>
     <Navbar.Brand href="#home" className="fw-bold">
      <span className="logo-color">REENOSHOP</span>BEE
     </Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto nav-link-custom">
       <Nav.Link href="#home">HOME</Nav.Link>
       <Nav.Link href="#link">WOMEN</Nav.Link>
       <Nav.Link href="#link">MENS</Nav.Link>
       <Nav.Link href="#link">KIDS</Nav.Link>
       <Nav.Link href="#link">JEWELLERY</Nav.Link>
       <Nav.Link href="#link">ACCESSORIES</Nav.Link>
      </Nav>
     </Navbar.Collapse>
     <div className="d-none d-md-block">
      <button className="border-0 me-2 link-btn cart-btn">
       <i className="fas fa-shopping-cart"></i>
       <p className="cart-items-count">0</p>
      </button>
      <button className="border-0 mx-2 link-btn">
       <i className="fas fa-search"></i>
      </button>
      <button className="border-0 ms-2 link-btn">
       <i className="fas fa-bars"></i>
      </button>
     </div>
    </Container>
   </Navbar>
  </div>
 );
};

export default NavigationBar;
