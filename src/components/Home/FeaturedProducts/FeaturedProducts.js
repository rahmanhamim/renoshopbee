import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import "./FeaturedProducts.css";

const FeaturedProducts = () => {
 const [products, setProducts] = useState([]);
 useEffect(() => {
  fetch("./products.json")
   .then((res) => res.json())
   .then((data) => setProducts(data));
 }, []);

 return (
  <section className="container-fluid featured-products-section">
   <div className="section-title">
    <h2>FEATURED PRODUCTS</h2>
    <p>Newest trends from top brands</p>
   </div>

   <Row xs={2} md={5} className="g-4">
    {products.map((product, index) => (
     <FeaturedProduct key={index} product={product}></FeaturedProduct>
    ))}
   </Row>
  </section>
 );
};

export default FeaturedProducts;
