import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "../redux/actions/productActions";
import SuggestedProducts from "./SuggestedProducts";
function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [Open, setOpen] = useState(false);
  const totalPriceArr = cart.products.map((product) => {
    return product.price;
  });

  let sum = totalPriceArr.reduce(function (a, b) {
    return a + b;
  }, 0);

  function removeFromCart(ID) {
    const Filtered = cart.products.filter((element) => element.id !== ID);
    console.log(Filtered);
    dispatch(addProduct((cart.products = Filtered)));
  }

  function checkoutToggle() {
    setOpen((Open) => !Open);
  }
  return (
    <div>
      {cart.products.length === 0 && (
        <div className="emptyCart">
          <h1>Your cart is empty</h1>
          <Link to="/">
            <p>Go back to shopping</p>
          </Link>
        </div>
      )}
      {cart.products.length >= 1 && (
        <div>
          <h1> YOUR CART</h1>
          <div className="Line bottom"></div>
          <h3>Total Cart: ${sum}</h3>

          {cart.products.map((product) => {
            return (
              <div className="cartCard">
                <div className="imageMin">
                  <img width="25px" src={product.image} alt={product.title} />
                </div>
                <h4 className="cartTitle">{product.title}</h4>
                <p className="cartPrice">Price: ${product.price}</p>
                <div
                  className="remove"
                  onClick={() => removeFromCart(product.id)}
                >
                  remove item
                </div>
              </div>
            );
          })}
          <div className="Line top"></div>
          <div className="checkBtn" onClick={checkoutToggle}>
            <h5 className="checkout">CheckOut</h5>
          </div>
        </div>
      )}
      {Open && (
        <div className="modal">
          <div className="modal__inner">
            <i className="shop icon bigShop"></i>
            <h2>Total Cart: ${sum}</h2>

            <h3>items in cart: {cart.products.length}</h3>
            <div className="payPal opacityH">
              <img width="110px" src="/Images/paypal.png" />
            </div>
            <div className="Debit opacityH">
              <p>Check out with debit card</p>
            </div>
            <div className="Cancel opacityH" onClick={checkoutToggle}>
              <p>cancel</p>
            </div>
          </div>
        </div>
      )}
      <div>
        <div className="Line top bottom"></div>
        <SuggestedProducts />
      </div>
    </div>
  );
}

export default Cart;
