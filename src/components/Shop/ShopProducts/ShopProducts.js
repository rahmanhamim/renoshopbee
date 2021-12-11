import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShopProducts = ({ pd }) => {
 return (
  <Col>
   <Card className="h-100 feature-card-img-wrapper ">
    <Card.Img variant="top" src={pd.img} />
    <p className="feature-card-icons">
     <Link to="/cart" className="cart-card-btn">
      <button>
       <i className="fas fa-shopping-cart"></i>
      </button>
     </Link>
     <Link to="/wishlist" className="cart-card-btn">
      <button>
       <i className="fas fa-heart"></i>
      </button>
     </Link>
     <Link to="/comparison" className="cart-card-btn">
      <button>
       <i className="fas fa-random"></i>
      </button>
     </Link>
    </p>
    <Card.Body>
     <Card.Title>{pd.name}</Card.Title>
     <Card.Text>
      <span className="span-text-primary fw-bold">$ {pd.price}</span>
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

export default ShopProducts;
