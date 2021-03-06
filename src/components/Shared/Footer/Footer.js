import React from "react";
import "./Footer.css";
import amazonLogo from "../../../images/amazon-logo.png";
import amexLogo from "../../../images/amex-logo.png";
import paypalLogo from "../../../images/paypal-logo.png";
import mastercardLogo from "../../../images/mastercard-logo.png";
import visaLogo from "../../../images/visa-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
 return (
  <footer>
   <div className="container info-text">
    <div className="row">
     <div className="col-md-7 info-text-left  py-2">
      We're confident we've provided all the best for you. Stay connected with
      us.
     </div>
     <div className="col-md-2 ms-auto d-flex  py-2 align-items-center justify-content-between">
      <i className="fab fa-facebook-f me-2"></i>
      <i className="fab fa-twitter mx-2"></i>
      <i className="fab fa-instagram mx-2"></i>
      <i className="fab fa-linkedin-in mx-2"></i>
      <i className="fab fa-behance ms-2"></i>
     </div>
    </div>
   </div>
   <hr />
   <div className="container">
    <div className="row">
     <div className="col-md-3 py-4 footer-col">
      <h5>INFORMATION</h5>
      <p>
       <Link to="/">Delivery Information</Link>
      </p>
      <p>
       <Link to="/">Discount</Link>
      </p>
      <p>
       <Link to="/">Sitemap</Link>
      </p>
      <p>
       <Link to="/">Privacy Policy</Link>
      </p>
      <p>
       <Link to="/">My Account</Link>
      </p>
     </div>
     <div className="col-md-3 py-4 footer-col">
      <h5>MY ACCOUNT</h5>
      <p>
       <Link to="/">Sign In</Link>
      </p>
      <p>
       <Link to="/">View Cart</Link>
      </p>
      <p>
       <Link to="/">My Wishlist</Link>
      </p>
      <p>
       <Link to="/">Check Out</Link>
      </p>
      <p>
       <Link to="/">Track My Order</Link>
      </p>
     </div>
     <div className="col-md-3 py-4 footer-col">
      <h5>HELP</h5>
      <p>
       <Link to="/">F.A.Q</Link>
      </p>
      <p>
       <Link to="/">Shipping</Link>
      </p>
      <p>
       <Link to="/">Contact Us</Link>
      </p>
      <p>
       <Link to="/">Privacy Policy</Link>
      </p>
     </div>
     <div className="col-md-3 py-4 footer-col">
      <h5>CONTACT INFO</h5>
      <p>
       <Link to="/">
        <i className="fas fa-globe-americas"></i> 1234 Your Address, Country.
       </Link>
      </p>
      <p>
       <Link to="/">
        <i className="fas fa-phone-alt"></i> +1 234 567 898
       </Link>
      </p>
      <p>
       <Link to="/">
        <i className="fas fa-envelope"></i>{" "}
        <span className="span-text-primary fw-bold">mail@domain.com</span>
       </Link>
      </p>
     </div>
    </div>
   </div>
   <div className="container-fluid bg-dark text-muted py-3">
    <div className="container d-md-flex justify-content-between">
     <div className="text-center">
      <p className="m-0 py-2">
       Copyright 2021 RenoshopBee all right reserved | Design By BeeStudios
      </p>
     </div>
     <div className="text-center">
      <img
       src={amazonLogo}
       className="img-fluid"
       style={{ width: "100px" }}
       alt=""
      />
      <img
       src={visaLogo}
       className="img-fluid"
       style={{ width: "100px" }}
       alt=""
      />
      <img
       src={mastercardLogo}
       className="img-fluid"
       style={{ width: "100px" }}
       alt=""
      />
      <img
       src={paypalLogo}
       className="img-fluid"
       style={{ width: "100px" }}
       alt=""
      />
      <img
       src={amexLogo}
       className="img-fluid"
       style={{ width: "100px" }}
       alt=""
      />
     </div>
    </div>
   </div>
  </footer>
 );
};

export default Footer;
