import React from "react";
import { Card, Col } from "react-bootstrap";
import "./FeaturedProduct.css";

const FeaturedProduct = ({ product }) => {
 return (
  <Col>
   <Card className="h-100 feature-card-img-wrapper ">
    <Card.Img variant="top" src={product.img} />
    <p className="feature-card-icons">
     <button>
      <i className="fas fa-shopping-cart"></i>
     </button>
     <button>
      <i className="fas fa-heart"></i>
     </button>
     <button>
      <i className="fas fa-random"></i>
     </button>
    </p>
    <Card.Body>
     <Card.Title>{product.name}</Card.Title>
     <Card.Text>$ {product.price}</Card.Text>
     <p className="m-0" style={{ color: "#FF9600" }}>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="far fa-star"></i>
     </p>
    </Card.Body>
   </Card>
  </Col>
 );
};

export default FeaturedProduct;
