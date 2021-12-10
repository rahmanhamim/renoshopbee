import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import TopLinkBar from "../Home/TopLinkBar/TopLinkBar";
import Footer from "../Shared/Footer/Footer";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import "./Comparison.css";
import demoImg from "../../images/product-demo.jpg";

const Comparison = () => {
 return (
  <>
   <TopLinkBar />
   <NavigationBar />
   <section className="wishlist-section container my-5">
    <div>
     <Link to="/" className="navigation-links ms-0">
      Home <i className="fas fa-angle-double-right"></i>
     </Link>
     <Link to="/wishlist" className="navigation-links">
      Pages <i className="fas fa-angle-double-right"></i>
     </Link>
     <Link to="/wishlist" className="navigation-links">
      Shop <i className="fas fa-angle-double-right"></i>
     </Link>
     <Link to="/wishlist" className="navigation-links">
      Comparison
     </Link>
    </div>
    <div className="my-5">
     <Table responsive>
      <thead className="border text-center">
       <tr>
        <th className="border">Products</th>
        <th className="border">Casual men wearing cool shoe</th>
        <th className="border">Casual men wearing cool shoe</th>
        <th className="border">Casual men wearing cool shoe</th>
       </tr>
      </thead>
      <tbody>
       <tr className="">
        <td className="border">
         <p>Image</p>
        </td>
        <td
         className="border text-center pb-5"
         style={{ transform: "translateY(10%)" }}
        >
         <img src={demoImg} style={{ width: "100px" }} alt="" />
        </td>
        <td
         className="border text-center pb-5"
         style={{ transform: "translateY(10%)" }}
        >
         <img src={demoImg} style={{ width: "100px" }} alt="" />
        </td>
        <td
         className="border text-center pb-5"
         style={{ transform: "translateY(10%)" }}
        >
         <img src={demoImg} style={{ width: "100px" }} alt="" />
        </td>
       </tr>
       <tr className="border">
        <td className="border">Price</td>
        <td className="border">$120</td>
        <td className="border">$120</td>
        <td className="border">$120</td>
       </tr>
       <tr className="border">
        <td className="border">Rating</td>
        <td className="boder">
         <p className="m-0 fw-bold">
          <i className="fas fa-star me-1" style={{ color: "#3CB978" }}></i>
          <i className="fas fa-star me-1" style={{ color: "#3CB978" }}></i>
          <i className="fas fa-star me-1" style={{ color: "#3CB978" }}></i>
          <i className="fas fa-star me-1" style={{ color: "#3CB978" }}></i>
          <i className="far fa-star" style={{ color: "#3CB978" }}></i>
         </p>
        </td>
        <td className="border">
         <p className="m-0 fw-bold">
          <i className="fas fa-star me-1" style={{ color: "#3CB978" }}></i>
          <i className="fas fa-star me-1" style={{ color: "#3CB978" }}></i>
          <i className="fas fa-star me-1" style={{ color: "#3CB978" }}></i>
          <i className="fas fa-star me-1" style={{ color: "#3CB978" }}></i>
          <i className="far fa-star" style={{ color: "#3CB978" }}></i>
         </p>
        </td>
        <td className="border">
         <p className="m-0 fw-bold">
          <i className="fas fa-star me-1" style={{ color: "#3CB978" }}></i>
          <i className="fas fa-star me-1" style={{ color: "#3CB978" }}></i>
          <i className="fas fa-star me-1" style={{ color: "#3CB978" }}></i>
          <i className="fas fa-star me-1" style={{ color: "#3CB978" }}></i>
          <i className="far fa-star" style={{ color: "#3CB978" }}></i>
         </p>
        </td>
       </tr>
       <tr className="border">
        <td>Model</td>
        <td className="border">Product 1</td>
        <td className="border">Product 2</td>
        <td className="border">Product 3</td>
       </tr>
       <tr className="border">
        <td>Brand</td>
        <td className="border">Hewlett-packard</td>
        <td className="border">Hewlett-packard</td>
        <td className="border">Hewlett-packard</td>
       </tr>
       <tr className="border">
        <td>Summary</td>
        <td className="border">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad sint
         veniam cumque culpa accusamus molestias dolorem et obcaecati minus
         possimus?
        </td>
        <td className="border">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad sint
         veniam cumque culpa accusamus molestias dolorem et obcaecati minus
         possimus?
        </td>
        <td className="border">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad sint
         veniam cumque culpa accusamus molestias dolorem et obcaecati minus
         possimus?
        </td>
       </tr>
       <tr className="border">
        <td></td>
        <td className="border">
         <div>
          <button className="btn-addtocart px-3">Add to cart</button>
          <button className="wishlist-x-btn pt-0 mt-0">
           <i className="far fa-times-circle"></i>
          </button>
         </div>
        </td>
        <td className="border">
         <div>
          <button className="btn-addtocart px-3">Add to cart</button>
          <button className="wishlist-x-btn pt-0 mt-0">
           <i className="far fa-times-circle"></i>
          </button>
         </div>
        </td>
        <td className="border">
         <div>
          <button className="btn-addtocart px-3">Add to cart</button>
          <button className="wishlist-x-btn pt-0 mt-0">
           <i className="far fa-times-circle"></i>
          </button>
         </div>
        </td>
       </tr>
      </tbody>
     </Table>
    </div>
   </section>
   <Footer />
  </>
 );
};

export default Comparison;
