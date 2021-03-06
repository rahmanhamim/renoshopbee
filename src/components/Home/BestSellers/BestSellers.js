import React from "react";
import "./BestSellers.css";
import demoImg from "../../../images/product-demo.jpg";
import { Link } from "react-router-dom";

const BestSellers = () => {
 return (
  <section className="best-seller-section container-fluid">
   <div className="row d-flex justify-content-evenly align-items-center">
    <div className="col-md-2">
     <h2 className="m-0 fw-bold">BEST SELLERS</h2>
     <small className="fst-italic best-seller-span">
      The best productions from us
     </small>
     <p className="mt-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta molestiae
      nam non sequi velit dolorum eos asperiores quidem beatae, eligendi
     </p>
    </div>
    <div className="col-md-9">
     <div className="row">
      <div
       className="col-md-3 d-flex justify-content-center"
       data-aos="fade"
       data-aos-delay="200"
      >
       <div>
        <div className="card-img-wrapper">
         <img src={demoImg} alt="" className="img-fluid" />
         <p className="card-icons">
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
        </div>
        <p className="m-0 fw-bold pt-3">Cruise Dual Analog</p>
        <p className="m-0 fw-bold py-2 span-text-primary">$250.00</p>
        <p className="m-0 fw-bold">
         <i className="fas fa-star me-1" style={{ color: "#FF9600" }}></i>
         <i className="fas fa-star me-1" style={{ color: "#FF9600" }}></i>
         <i className="fas fa-star me-1" style={{ color: "#FF9600" }}></i>
         <i className="fas fa-star me-1" style={{ color: "#FF9600" }}></i>
         <i className="far fa-star" style={{ color: "#FF9600" }}></i>
        </p>
       </div>
      </div>
      <div
       className="col-md-3 d-flex justify-content-center"
       data-aos="fade"
       data-aos-delay="200"
      >
       <div>
        <div className="card-img-wrapper">
         <img src={demoImg} alt="" className="img-fluid" />
         <p className="card-icons">
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
        </div>
        <p className="m-0 fw-bold pt-3">Cruise Dual Analog</p>
        <p className="m-0 fw-bold py-2 span-text-primary">$250.00</p>
        <p className="m-0 fw-bold">
         <i className="fas fa-star me-1" style={{ color: "#FF9600" }}></i>
         <i className="fas fa-star me-1" style={{ color: "#FF9600" }}></i>
         <i className="fas fa-star me-1" style={{ color: "#FF9600" }}></i>
         <i className="fas fa-star me-1" style={{ color: "#FF9600" }}></i>
         <i className="far fa-star" style={{ color: "#FF9600" }}></i>
        </p>
       </div>
      </div>
      <div
       className="col-md-3 d-flex justify-content-center"
       data-aos="fade"
       data-aos-delay="200"
      >
       <div>
        <div className="card-img-wrapper">
         <img src={demoImg} alt="" className="img-fluid" />
         <p className="card-icons">
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
        </div>
        <p className="m-0 fw-bold pt-3">Cruise Dual Analog</p>
        <p className="m-0 fw-bold py-2 span-text-primary">$250.00</p>
        <p className="m-0 fw-bold">
         <i className="fas fa-star me-1" style={{ color: "#FF9600" }}></i>
         <i className="fas fa-star me-1" style={{ color: "#FF9600" }}></i>
         <i className="fas fa-star me-1" style={{ color: "#FF9600" }}></i>
         <i className="fas fa-star me-1" style={{ color: "#FF9600" }}></i>
         <i className="far fa-star" style={{ color: "#FF9600" }}></i>
        </p>
       </div>
      </div>
      <div
       className="col-md-3 d-flex justify-content-center"
       data-aos="fade"
       data-aos-delay="200"
      >
       <div>
        <div className="card-img-wrapper">
         <img src={demoImg} alt="" className="img-fluid" />
         <p className="card-icons">
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
        </div>
        <p className="m-0 fw-bold pt-3">Cruise Dual Analog</p>
        <p className="m-0 fw-bold py-2 span-text-primary">$250.00</p>
        <p className="m-0 fw-bold">
         <i className="fas fa-star me-1" style={{ color: "#FF9600" }}></i>
         <i className="fas fa-star me-1" style={{ color: "#FF9600" }}></i>
         <i className="fas fa-star me-1" style={{ color: "#FF9600" }}></i>
         <i className="fas fa-star me-1" style={{ color: "#FF9600" }}></i>
         <i className="far fa-star" style={{ color: "#FF9600" }}></i>
        </p>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default BestSellers;
