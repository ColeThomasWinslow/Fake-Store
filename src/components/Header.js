import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export const Header = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="ui fixed menu header">
      <div className="header">
        <Link to="/">
          <h2 className="Logo">FakeShop</h2>
        </Link>
        <Link to="/cart">
          <div className="cartBox">
            <i className="shop icon"></i>
            <h3>cart: {cart.products.length}</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};
