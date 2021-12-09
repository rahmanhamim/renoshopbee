import React from "react";
import "./Newsletter.css";
import newsletterLogo1 from "../../../images/newsletter-1.png";
import newsletterLogo2 from "../../../images/newsletter-2.png";
import newsletterLogo3 from "../../../images/newsletter-3.png";
import newsletterLogo4 from "../../../images/newsletter-4.png";

const Newsletter = () => {
 return (
  <section className="container-fluid newsletter-section">
   <div className="row">
    <div
     className="col-md-6 newsletter-leftside d-flex
    justify-content-center text-center"
    >
     <div>
      <h2>Get Out Special Discount</h2>
      <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis non <br />
       similique quisquam iure!
      </p>
      <div className="letter-from">
       <input type="text" placeholder="Your Email" />
       <button className="btn-regular"> GET COUPON NOW</button>
      </div>
     </div>
    </div>
    <div className="col-md-6 d-flex justify-content-center align-items-center newsletter-logos py-2">
     <div className="text-center">
      <img src={newsletterLogo1} alt="" className="img-fluid mx-3" />
      <img src={newsletterLogo2} alt="" className="img-fluid mx-3" />
      <img src={newsletterLogo3} alt="" className="img-fluid mx-3" />
      <img src={newsletterLogo4} alt="" className="img-fluid mx-3" />
     </div>
    </div>
   </div>
  </section>
 );
};

export default Newsletter;
