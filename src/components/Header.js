import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../icons/CheckMark.svg";
import Search from "./Search";
export const Header = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <div className="header ">
        <Link className="Logo" to="/">
          <img width="188px" alt="Logo" src={Logo} />
        </Link>
        <Search />
        <div className="Links">
          <Link to="/Mens">Men's</Link>
          <Link to="/Women">Women's</Link>
          <Link to="/Jewelry">Jewelry</Link>
          <Link to="/Electronics">Electronics</Link>
        </div>
        <Link to="/cart">
          <div className="cartBox">
            <i className="shop icon cart"></i>
            <h3 className="number"> {cart.products.length}</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};
