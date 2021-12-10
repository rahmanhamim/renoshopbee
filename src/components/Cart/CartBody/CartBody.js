import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartItems from "../CartItems/CartItems";
import "./CartBody.css";

const CartBody = () => {
 const [cartItems, setCartItems] = useState([]);
 useEffect(() => {
  fetch("./cartItems.json")
   .then((res) => res.json())
   .then((data) => setCartItems(data));
 }, []);

 return (
  <section className="container my-5">
   <div>
    <Link to="/" className="navigation-links ms-0">
     Home <i className="fas fa-angle-double-right"></i>
    </Link>
    <Link to="/cart" className="navigation-links">
     Pages <i className="fas fa-angle-double-right"></i>
    </Link>
    <Link to="/cart" className="navigation-links">
     Shop <i className="fas fa-angle-double-right"></i>
    </Link>
    <Link to="/cart" className="navigation-links">
     Cart
    </Link>
   </div>
   <div className="my-5">
    <Table responsive>
     <thead className="border text-center">
      <tr>
       <th className="border" colSpan="2">
        Products
       </th>
       <th className="border">Color &#38; Size</th>
       <th className="border">Quantity</th>
       <th className="border">Price</th>
       <th className="border">Total</th>
      </tr>
     </thead>
     <tbody>
      {cartItems.map((cartItem, index) => (
       <CartItems key={index} cartItem={cartItem}></CartItems>
      ))}
     </tbody>
     <tfoot className="border">
      <tr>
       <td className="text-end" colspan="6">
        <button className="btn-custom">Update Cart</button>
        <Link to="/checkout">
         <button className="btn-regular me-4">Continue Shopping</button>
        </Link>
       </td>
      </tr>
     </tfoot>
    </Table>
   </div>
   <div>
    <div className="row">
     <div className="col-md-6 my-2">
      <h6 className="fw-bold">USE COUPON CODE</h6>
      <div>
       <small className="text-muted">Enter Your Coupon Here</small>
       <br />
       <div className="input-field-container">
        <input type="text" placeholder="Enter your coupon here" />
        <button className="btn-cart m-0">Apply</button>
       </div>
      </div>
     </div>
     <div className="col-md-6 my-2">
      <h6 className="fw-bold">USE GIFT VOUCHER</h6>
      <div>
       <small className="text-muted">Enter Your Gift Voucher Code Here</small>
       <br />
       <div className="input-field-container">
        <input type="text" placeholder="Enter Your Gift Voucher Code Here" />
        <button className="btn-cart m-0">Apply</button>
       </div>
      </div>
     </div>
    </div>
   </div>

   {/* Cart calculation starts here */}

   <div className="cart-calculation">
    <div className="row">
     <div className="col-md-6 my-2">
      <h6 className="fw-bold">SHIPPING AVAILABILITY</h6>
      <div>
       <small className="text-muted">Select Country</small>
       <br />
       <div className="select-field-container">
        <select name="country" id="">
         <option value="Viet Nam">Viet Nam</option>
         <option value="USA">USA</option>
         <option value="UK">UK</option>
         <option value="Germany">Germany</option>
         <option value="Ukrain">Ukrain</option>
        </select>
       </div>
      </div>
      <div className="mt-4">
       <small className="text-muted">Select State</small>
       <br />
       <div className="select-field-container">
        <select name="country" id="">
         <option value="florida">Florida</option>
         <option value="louisiana">Louisiana</option>
         <option value="hawaii">Hawaii</option>
         <option value="california">California</option>
        </select>
       </div>
      </div>
      <div className="mt-4">
       <small className="text-muted">Postal / Zip</small>
       <br />
       <input type="text" className="input-zip" placeholder="Postal / Zip " />
      </div>
      <button className="btn-custom mt-3 mx-0">UPDATE TOTALS</button>
     </div>
     <div className="col-md-6 my-2">
      <h6 className="fw-bold">SHOPPING CART CALCULATION</h6>

      <div className="border">
       <div className="d-flex justify-content-between mx-5 mt-4">
        <p className="fw-bold">Subtotal</p>
        <p className="fs-4">$450</p>
       </div>
       <div className="d-flex justify-content-between mx-5 mt-2">
        <p className="fw-bold">Coupon</p>
        <p className="fs-4">-$50</p>
       </div>
       <div className="d-flex justify-content-between mx-5 mt-2">
        <p className="fw-bold">Shipping</p>
        <p className="fw-bold">Free Shipping</p>
       </div>
      </div>
      <div className="d-flex justify-content-between px-5 pt-3 m-0 border">
       <p className="fs-4">Total</p>
       <p className="fs-4">$400</p>
      </div>

      <div className="d-flex justify-content-end">
       <Link to="/checkout">
        <button className="btn-regular mt-3 py-2">PROCEED CHECKOUT</button>
       </Link>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default CartBody;
