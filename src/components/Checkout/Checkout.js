import React from "react";
import { Link } from "react-router-dom";
import TopLinkBar from "../Home/TopLinkBar/TopLinkBar";
import Footer from "../Shared/Footer/Footer";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import "./Checkout.css";

const Checkout = () => {
 return (
  <>
   <TopLinkBar />
   <NavigationBar />
   <section className="checkout-section container my-5">
    <div>
     <Link to="/" className="navigation-links ms-0">
      Home <i className="fas fa-angle-double-right"></i>
     </Link>
     <Link to="/checkout" className="navigation-links">
      Pages <i className="fas fa-angle-double-right"></i>
     </Link>
     <Link to="/checkout" className="navigation-links">
      Shop <i className="fas fa-angle-double-right"></i>
     </Link>
     <Link to="/checkout" className="navigation-links">
      Checkout
     </Link>
    </div>
    <div className="billing-section my-5">
     <h5>BILLING DETAILS</h5>
     <form action="">
      <div className="row">
       <div className="col-md-7">
        <div className="d-flex justify-content-between">
         <p className="input-name">
          <label htmlFor="firstname">
           First Name <span className="text-danger fw-bold">*</span>{" "}
          </label>{" "}
          <br />
          <input type="text" name="firstname" id="firstname"></input>
         </p>
         <p className="input-name">
          <label htmlFor="lasttname">
           Last Name <span className="text-danger fw-bold">*</span>
          </label>
          <br />
          <input type="text" name="lasttname" id="lasttname"></input>
         </p>
        </div>
        <div className="select-field-container">
         <p className="mb-0">
          Country <span className="text-danger fw-bold">*</span>
         </p>
         <select name="country" id="">
          <option value="Viet Nam">Viet Nam</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Germany">Germany</option>
          <option value="Ukrain">Ukrain</option>
         </select>
        </div>
        <div>
         <p className="text-input-checkout">
          <label htmlFor="company">Company Name</label> <br />
          <input type="text" name="company" id="company" />
         </p>
         <p className="text-input-checkout">
          <label htmlFor="company">
           Address <span className="text-danger fw-bold">*</span>
          </label>
          <br />
          <input type="text" name="company" id="company" required />
         </p>
         <p className="text-input-checkout">
          <label htmlFor="company">Postal / Zip</label> <br />
          <input type="text" name="company" id="company" />
         </p>
         <p className="text-input-checkout">
          <label htmlFor="company">
           Town / City <span className="text-danger fw-bold">*</span>
          </label>
          <br />
          <input type="text" name="company" id="company" required />
         </p>
        </div>
        <div className="d-flex justify-content-between">
         <p className="input-name">
          <label htmlFor="email">
           Email Address <span className="text-danger fw-bold">*</span>{" "}
          </label>{" "}
          <br />
          <input type="email" name="email" id="email" required></input>
         </p>
         <p className="input-name">
          <label htmlFor="phone">
           Phone <span className="text-danger fw-bold">*</span>
          </label>
          <br />
          <input type="text" name="phone" id="phone" required></input>
         </p>
        </div>
        <p>
         <input type="checkbox" id="checkbox" />
         <label htmlFor="checkbox" className="ms-2">
          create an account?
         </label>
        </p>
       </div>

       {/* right side */}
       <div className="col-md-5 border border-dark py-4 px-5">
        <h5>YOUR ORDER</h5>
        <div className="d-flex justify-content-between">
         <p className="mb-0 mt-4">Product</p>
         <p className="mb-0 mt-4">Total</p>
        </div>
        <hr />
        <div>
         <div className="d-flex justify-content-between">
          <p className="mb-0 mt-4">Casual men wearing cool shoe x 1</p>
          <p className="mb-0 mt-4">$ 120</p>
         </div>
         <div className="d-flex justify-content-between">
          <p className="mb-0 mt-4">Casual men wearing cool shoe x 1</p>
          <p className="mb-0 mt-4">$ 120</p>
         </div>
        </div>
        <hr />
       </div>
      </div>
     </form>
    </div>
   </section>
   <Footer />
  </>
 );
};

export default Checkout;
