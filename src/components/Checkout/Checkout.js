import React from "react";
import { Link } from "react-router-dom";
import TopLinkBar from "../Home/TopLinkBar/TopLinkBar";
import Footer from "../Shared/Footer/Footer";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import "./Checkout.css";

const Checkout = () => {
 function handleSubmit(e) {
  e.preventDefault();
  alert("Site is under construction");
 }

 return (
  <>
   <TopLinkBar />
   <NavigationBar />
   <section className="checkout-section container mt-5">
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
     <form onSubmit={handleSubmit}>
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

       {/* right side starts here */}
       <div className="col-md-5 border border-dark">
        <div className="row">
         <div className="col-12  py-4 px-5">
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
            <p className="mb-0 mt-4">$ 180</p>
           </div>
          </div>
          <hr />
          <div>
           <div className="d-flex justify-content-between">
            <p className="mb-0 mt-4">Subtotal</p>
            <p className="mb-0 mt-4">$ 400</p>
           </div>
           <div className="d-flex justify-content-between">
            <p className="mb-0 mt-4">Shipping</p>
            <p className="mb-0 mt-4">Free Shipping</p>
           </div>
          </div>
          <hr />
          <div>
           <div className="d-flex justify-content-between">
            <p className="mb-0 mt-4 fw-bold fs-4">Subtotal</p>
            <p className="mb-0 mt-4 fw-bold fs-4">$ 400</p>
           </div>
          </div>
         </div>
         <div className="col-12 border-top border-2  py-4 px-5">
          <p>
           <input type="checkbox" name="bank" id="bank" className="me-3" />
           <label htmlFor="bank">Direct Bank Transfer</label>
          </p>
          <p className="bank-text py-2 px-4">
           Make your payment directly into our bank account. Please use your
           Order ID as the payment referecne. Your order won't be shipped until
           the funds have cleared in our account.
          </p>
          <p>
           <input type="checkbox" name="cheque" id="cheque" className="me-3" />
           <label htmlFor="cheque">Cheque Payment</label>
          </p>
          <p>
           <input type="checkbox" name="paypal" id="paypal" className="me-3" />
           <label htmlFor="paypal">PayPal</label>
          </p>
         </div>
        </div>
       </div>
       <p className="submit-place-order">
        <input
         type="submit"
         value="Place Order"
         className="btn-regular mt-2 py-2 px-4"
        />
       </p>
      </div>
     </form>
    </div>
   </section>
   <Footer />
  </>
 );
};

export default Checkout;
