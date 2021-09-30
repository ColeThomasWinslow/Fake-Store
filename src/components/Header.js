import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export const Header = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <img className="DevTag" src="/Images/Dev-Tag.png" alt="Dev" />
      <div className="ui fixed menu header">
        <div className="header">
          <Link to="/">
            <img
              className="Logo"
              width="198px"
              alt="Logo"
              src="/Images/FAKE-SHOP.png"
            />
          </Link>

          <Link to="/cart">
            <div className="cartBox">
              <i className="shop icon cart"></i>
              <h3 className="number"> {cart.products.length}</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
