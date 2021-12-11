import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import TopLinkBar from "../Home/TopLinkBar/TopLinkBar";
import Footer from "../Shared/Footer/Footer";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import "./Shop.css";

const Shop = () => {
 return (
  <>
   <TopLinkBar />
   <NavigationBar />
   <div className="shop-container container">
    <div className="m-5 mx-0">
     <Link to="/" className="navigation-links ms-0">
      Home <i className="fas fa-angle-double-right"></i>
     </Link>
     <Link to="/shop" className="navigation-links">
      Pages <i className="fas fa-angle-double-right"></i>
     </Link>
     <Link to="/shop" className="navigation-links">
      Shop <i className="fas fa-angle-double-right"></i>
     </Link>
     <Link to="/shop" className="navigation-links">
      Wishlist
     </Link>
    </div>
    <div className="row">
     <div className="col-md-3">
      <div>
       <h5 className="fw-bold mt-2 mb-4">CATEGORIES</h5>
       <p className="d-flex align-items-center">
        <i
         className="fas fa-square-full text-muted me-2"
         style={{ fontSize: "6px" }}
        ></i>
        <span>
         Accessories (<span>15</span>)
        </span>
       </p>
       <p className="d-flex align-items-center">
        <i
         className="fas fa-square-full text-muted me-2"
         style={{ fontSize: "6px" }}
        ></i>
        <span>
         Dresses (<span>50</span>)
        </span>
       </p>
       <p className="d-flex align-items-center">
        <i
         className="fas fa-square-full text-muted me-2"
         style={{ fontSize: "6px" }}
        ></i>
        <span>
         Women (<span>150</span>)
        </span>
       </p>
       <p className="d-flex align-items-center">
        <i
         className="fas fa-square-full text-muted me-2"
         style={{ fontSize: "6px" }}
        ></i>
        <span>
         Men (<span>120</span>)
        </span>
       </p>
       <p className="d-flex align-items-center">
        <i
         className="fas fa-square-full text-muted me-2"
         style={{ fontSize: "6px" }}
        ></i>
        <span>
         Watch (<span>150</span>)
        </span>
       </p>
       <p className="d-flex align-items-center">
        <i
         className="fas fa-square-full text-muted me-2"
         style={{ fontSize: "6px" }}
        ></i>
        <span>
         Clothing (<span>150</span>)
        </span>
       </p>
       <p className="d-flex align-items-center">
        <i
         className="fas fa-square-full text-muted me-2"
         style={{ fontSize: "6px" }}
        ></i>
        <span>
         Bags (<span>150</span>)
        </span>
       </p>
      </div>
      <hr />
      <label for="customRange2" className="form-label">
       Price
      </label>
      <input
       type="range"
       className="form-range"
       min="0"
       max="50000"
       id="customRange2"
      ></input>
      <hr />
     </div>
     <div className="col-md-9">
      <div className="d-flex justify-content-between">
       <p className="mb-0">Showing 1-12 of 44 results</p>
       <p className="mb-0">
        <select name="sort" id="sort" className="border-0">
         <option value="newest">Newest</option>
        </select>
       </p>
      </div>
      <hr />

      <div className="products-card my-5">
       <Row xs={1} md={3} className="g-4">
        {Array.from({ length: 12 }).map((_, idx) => (
         <Col>
          <Card>
           <Card.Img variant="top" src="holder.js/100px160" />
           <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
             This is a longer card with supporting text below as a natural
             lead-in to additional content. This content is a little bit longer.
            </Card.Text>
           </Card.Body>
          </Card>
         </Col>
        ))}
       </Row>
      </div>
     </div>
    </div>
   </div>
   <Footer />
  </>
 );
};

export default Shop;
