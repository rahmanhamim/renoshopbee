import React from "react";
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
    <button className="btn-buy">BUY NOW</button>
   </div>
  </section>
 );
};

export default Banner;
