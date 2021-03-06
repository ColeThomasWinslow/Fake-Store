import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "../redux/actions/productActions";
import Remove from "../icons/Remove.svg";
import { Rounded } from "../utils/Rounded";
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
    <div className=" Page">
      <div className="PageTitle">
        <h2>Your Cart</h2>
      </div>
      {cart.products.length === 0 && (
        <div className="emptyCart">
          <h1>Your cart is empty</h1>
          <Link to="/">
            <p className="Back"> back to shopping</p>
          </Link>
        </div>
      )}
      <div>
        {cart.products.length >= 1 && (
          <div>
            <div className="CartInfo">
              <div className="CartItems">
                {cart.products.map((product) => {
                  return (
                    <div key={product.id} className="cartCard">
                      <div>
                        <img
                          className="imageMin"
                          width="45px"
                          src={product.image}
                          alt={product.id}
                        />
                      </div>
                      <h4 className="cartTitle">{product.title}</h4>
                      <p className="cartPrice">Price: ${product.price}</p>
                      <div
                        className="remove"
                        onClick={() => removeFromCart(product.id)}
                      >
                        <img src={Remove} alt="X" />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="TotalBox">
                <div className="TotalInfo">
                  <h3>Summary</h3>
                </div>
                <div className="TotalInfo">
                  <h4>Subtotal</h4> <p>${Rounded(sum)}</p>
                </div>
                <div className="TotalInfo">
                  <h4>Estimated Shipping & Handling</h4> <p>$7.00</p>
                </div>
                <div className="TotalInfo">
                  <h4>Total: </h4> <p>${sum + 7}</p>
                </div>
                <p onClick={checkoutToggle} className="checkout checkBtn">
                  CheckOut
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      {Open && (
        <div className="modal">
          <div className="modal__inner">
            <i className="shop icon bigShop"></i>
            <h2>Total Cart: ${sum}</h2>

            <h3>items in cart: {cart.products.length}</h3>
            <div className="payPal opacityH">
              <img width="110px" src="/Images/paypal.png" alt="paypal" />
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
    </div>
  );
}

export default Cart;
