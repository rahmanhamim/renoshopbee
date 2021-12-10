import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Wishlist.css";
import TopLinkBar from "../Home/TopLinkBar/TopLinkBar";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import Footer from "../Shared/Footer/Footer";
import demoImg from "../../images/product-demo.jpg";

const Wishlist = () => {
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
      Wishlist
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
        <th className="border">Price</th>
        <th className="border"></th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td className="border" colSpan="2">
         <img
          src={demoImg}
          className="img-fluid"
          style={{ width: "80px", height: "100px" }}
          alt=""
         />
         <span className="ms-3">Casual men wearing cool shoe</span>
        </td>
        <td
         className="border text-center"
         style={{ transform: "translateY(10%)" }}
        >
         <p>Size: XL</p>
         <p>Color: Black</p>
        </td>

        <td className="border">
         <p className="table-data">$250</p>
        </td>
        <td className="border">
         <div className="d-flex">
          <button className="btn-addtocart  wishlist-btn px-3">
           Add to cart
          </button>
          <button className="wishlist-btn wishlist-x-btn">
           <i className="far fa-times-circle"></i>
          </button>
         </div>
        </td>
       </tr>
       <tr>
        <td className="border" colSpan="2">
         <img
          src={demoImg}
          className="img-fluid"
          style={{ width: "80px", height: "100px" }}
          alt=""
         />
         <span className="ms-3">Casual men wearing cool shoe</span>
        </td>
        <td
         className="border text-center"
         style={{ transform: "translateY(10%)" }}
        >
         <p>Size: XL</p>
         <p>Color: Black</p>
        </td>

        <td className="border">
         <p className="table-data">$250</p>
        </td>
        <td className="border">
         <div className="d-flex">
          <button className="btn-addtocart  wishlist-btn px-3">
           Add to cart
          </button>
          <button className="wishlist-btn wishlist-x-btn">
           <i className="far fa-times-circle"></i>
          </button>
         </div>
        </td>
       </tr>
       <tr>
        <td className="border" colSpan="2">
         <img
          src={demoImg}
          className="img-fluid"
          style={{ width: "80px", height: "100px" }}
          alt=""
         />
         <span className="ms-3">Casual men wearing cool shoe</span>
        </td>
        <td
         className="border text-center"
         style={{ transform: "translateY(10%)" }}
        >
         <p>Size: XL</p>
         <p>Color: Black</p>
        </td>

        <td className="border">
         <p className="table-data">$250</p>
        </td>
        <td className="border">
         <div className="d-flex">
          <button className="btn-addtocart  wishlist-btn px-3">
           Add to cart
          </button>
          <button className="wishlist-btn wishlist-x-btn">
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

export default Wishlist;
