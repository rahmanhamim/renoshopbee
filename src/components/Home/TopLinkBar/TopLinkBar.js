import React from "react";
import "./TopLinkBar.css";

const TopLinkBar = () => {
 return (
  <div className="bg-dark container-fluid">
   <div className="container">
    <div className="text-light">
     <div className="row">
      <div className="col-md-4 d-flex justify-content-between align-items-center py-2">
       <p className="link-border-right m-0">
        <i className="fas fa-phone-alt me-2"></i>+ 123 456 789
       </p>
       <p className="m-0">
        <i className="fas fa-envelope mx-2"></i>
        company@mail.com
       </p>
      </div>
      <div className="col-md-2 ms-auto d-flex align-items-center justify-content-between">
       <i className="fab fa-facebook-f me-2"></i>
       <i className="fab fa-twitter mx-2"></i>
       <i className="fab fa-instagram mx-2"></i>
       <i className="fab fa-linkedin-in mx-2"></i>
       <i className="fab fa-behance ms-2"></i>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default TopLinkBar;
