import React from "react";
import "./NavigationBar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
 return (
  <div>
   <Navbar expand="lg" className="nav-shadow">
    <Container>
     <Link to="/" className="text-decoration-none fw-bold text-dark fs-5">
      <span className="logo-color">REENOSHOP</span>BEE
     </Link>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto nav-link-custom">
       <Link to="/" className="navigation-links">
        HOME
       </Link>
       <Link to="/" className="navigation-links">
        WOMENS
       </Link>
       <Link to="/" className="navigation-links">
        MENS
       </Link>
       <Link to="/" className="navigation-links">
        KIDS
       </Link>
       <Link to="/" className="navigation-links">
        JEWELLERY
       </Link>
       <Link to="/" className="navigation-links">
        ACCESSORIES
       </Link>
       <div className="d-block d-md-none">
        <Link to="/cart" className="navigation-links m-0 ">
         <button className="border-0 me-2 link-btn cart-btn">
          <i className="fas fa-shopping-cart"></i>
          <p className="cart-items-count">0</p>
         </button>
        </Link>

        <button className="border-0 mx-2 link-btn">
         <i className="fas fa-search"></i>
        </button>
        <button className="border-0 ms-2 link-btn">
         <i className="fas fa-bars"></i>
        </button>
       </div>
      </Nav>
     </Navbar.Collapse>
     <div className="d-none d-md-block">
      <Link to="/cart" className="navigation-links">
       <button className="border-0 me-2 link-btn cart-btn">
        <i className="fas fa-shopping-cart"></i>
        <p className="cart-items-count">0</p>
       </button>
      </Link>

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
