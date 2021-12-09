import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./FeaturedProduct.css";

const FeaturedProduct = ({ product }) => {
 return (
  <Col>
   <Card className="h-100 feature-card-img-wrapper ">
    <Card.Img variant="top" src={product.img} />
    <p className="feature-card-icons">
     <Link to="/cart" className="cart-card-btn">
      <button>
       <i className="fas fa-shopping-cart"></i>
      </button>
     </Link>
     <button>
      <i className="fas fa-heart"></i>
     </button>
     <button>
      <i className="fas fa-random"></i>
     </button>
    </p>
    <Card.Body>
     <Card.Title>{product.name}</Card.Title>
     <Card.Text>
      <span className="span-text-primary fw-bold">$ {product.price}</span>
     </Card.Text>
     <p className="m-0" style={{ color: "#FF9600" }}>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="far fa-star"></i>
     </p>
    </Card.Body>
   </Card>
  </Col>
 );
};

export default FeaturedProduct;
