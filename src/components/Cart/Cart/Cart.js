import React from "react";
import Footer from "../../Shared/Footer/Footer";
import NavigationBar from "../../Shared/NavigationBar/NavigationBar";
import TopLinkBar from "../../Home/TopLinkBar/TopLinkBar";
import CartBody from "../CartBody/CartBody";

const Cart = () => {
 return (
  <>
   <TopLinkBar />
   <NavigationBar />
   <CartBody />
   <Footer />
  </>
 );
};

export default Cart;
