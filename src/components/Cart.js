import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "../redux/actions/productActions";
function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const totalPriceArr = cart.products.map((product) => {
    return product.price;
  });

  let sum = totalPriceArr.reduce(function (a, b) {
    return a + b;
  }, 0);
  console.log(sum);
  function removeFromCart(ID) {
    const Filtered = cart.products.filter((element) => element.id !== ID);
    console.log(Filtered);
    dispatch(addProduct((cart.products = Filtered)));
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
          <h2> YOUR CART</h2>
          <h3>Total Cart: ${sum}</h3>
          {cart.products.map((product) => {
            return (
              <div className="cartCard">
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
          <div className="checkout">
            <h3>CheckOut</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
