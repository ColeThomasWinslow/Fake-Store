import React, { useEffect, useState } from "react";
import SmallLogo from "../icons/SmallLogo.png";
import axios from "axios";
import {
  selectedProduct,
  removeSelectedProduct,
  addProduct,
} from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

export const ProductDetails = () => {
  const [Added, setAdded] = useState(false);
  const product = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart);

  const { id, image, title, price, category, description } = product;
  // getting id form url
  const { productId } = useParams();
  // dispatch actions
  const dispatch = useDispatch();
  // Api Call to fake store api
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(removeSelectedProduct());
    dispatch(selectedProduct(response.data));
  };
  // Add to cart action
  function addToCart() {
    dispatch(addProduct(cart.products.push(product)));
    setAdded(() => true);
    setTimeout(() => {
      setAdded(() => false);
    }, 2000);
  }

  useEffect(() => {
    fetchProductDetail();
  }, [productId]);

  return (
    <div className="Page">
      {Object.keys(product).length === 0 ? (
        <div className="Loading">Loading</div>
      ) : (
        <div className="SinglePage">
          <img className="singleImg" src={image} alt={title} />
          <div className="PageInfo">
            <div className="">
              {category === "men's clothing" && (
                <div className="meta cat mens">{category}</div>
              )}
              {category === "electronics" && (
                <div className="meta cat electronics">{category}</div>
              )}
              {category === "jewelery" && (
                <div className="meta cat jewelery">{category}</div>
              )}
              {category === "women's clothing" && (
                <div className="meta cat women">{category}</div>
              )}
              <h1>{title}</h1>
              <p>{description}</p> <div className=" fullPrice">${price}</div>
              <div className="AddToCartBtn" onClick={addToCart}>
                <i className="shop icon"></i>
                <div className="">Add to cart</div>
              </div>
              {Added && (
                <div className="Added">
                  <p>Item Added</p>
                  <span>
                    <img src={SmallLogo} alt="Small logo" />
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
