import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
 return (
  <section className="banner-section d-flex align-items-center">
   <div className="container">
    <h1>
     <span className="text-muted">THE BEST</span> <br />{" "}
     <span className="banner-text">WOOCOMMERCE</span>
    </h1>
    <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam maiores{" "}
     <br />
     eius accusamus. Accusamus expedita quos soluta esse molestias repellendus
     corrupti!
    </p>
    <Link to="/shop">
     <button className="btn-buy">BUY NOW</button>
    </Link>
   </div>
  </section>
 );
};

export default Banner;
