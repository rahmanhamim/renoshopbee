import React from "react";
import "./Offers.css";

const Offers = () => {
 return (
  <section className="offers-section container-fluid">
   <div className="row">
    <div className="col-md-3 text-center py-4 offers-text-container">
     <i className="fas fa-2x fa-gem mb-4"></i>
     <p className="offers-text">SPECIAL OFFERS</p>
     <small>Shop Big Save Big</small>
    </div>
    <div className="col-md-3 text-center py-4 offers-text-container">
     <i className="fab fa-2x fa-telegram-plane mb-4"></i>
     <p className="offers-text">FREE DELIVERY</p>
     <small>On Orders Above $99</small>
    </div>
    <div className="col-md-3 text-center py-4 offers-text-container">
     <i className="fas fa-2x fa-random mb-4"></i>
     <p className="offers-text">30 DAYS RETURN</p>
     <small>Policy We Offers</small>
    </div>
    <div className="col-md-3 text-center py-4 offers-text-container">
     <i className="fas fa-2x fa-rocket mb-4"></i>
     <p className="offers-text">FASTEST SHIPPING</p>
     <small>2 Days Express</small>
    </div>
   </div>
   <div className="row">
    <div className="col-md-4 offer-card-container-1 d-flex justify-content-center align-items-center text-center">
     <div className="offers-card-text">
      <p>FASHION</p>
      <h2>SUMMER &#38; AUTUMN</h2>
      <p>WINTER COLLECTION</p>
     </div>
    </div>
    <div className="col-md-4 offer-card-container-2 d-flex justify-content-center align-items-center text-center">
     <div className="offers-card-text">
      <p>FASHION FOR MEN</p>
      <h2>30% OFF</h2>
      <p>WINTER COLLECTION</p>
     </div>
    </div>
    <div className="col-md-4 offer-card-container-3 d-flex justify-content-center align-items-center text-center">
     <div className="offers-card-text">
      <p>FASHION</p>
      <h2>NEW FASHION STYLES</h2>
      <p>WINTER COLLECTION</p>
     </div>
    </div>
   </div>
  </section>
 );
};

export default Offers;
