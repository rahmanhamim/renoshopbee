import React from "react";
import "./CartItems.css";

const CartItems = ({ cartItem }) => {
 return (
  <tr>
   <td className="border" colSpan="2">
    <img
     src={cartItem?.img}
     className="img-fluid"
     style={{ width: "80px", height: "100px" }}
     alt=""
    />
    <span className="ms-3">{cartItem.name}</span>
   </td>
   <td className="border text-center" style={{ transform: "translateY(10%)" }}>
    <p>Size: {cartItem?.size}</p>
    <p>Color: Black</p>
   </td>
   <td className="border">
    <p className="table-data border">{cartItem?.quantity}</p>
   </td>
   <td className="border">
    <p className="table-data">${cartItem?.price}</p>
   </td>
   <td className="border">
    <p className="table-data">${cartItem?.price}</p>
   </td>
  </tr>
 );
};

export default CartItems;
