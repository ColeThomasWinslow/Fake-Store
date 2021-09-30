import React, { useEffect } from "react";
import axios from "axios";
import {
  selectedProduct,
  removeSelectedProduct,
  addProduct,
} from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
export const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart);

  const { image, title, price, category, description } = product;
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

    dispatch(selectedProduct(response.data));
  };
  // Add to cart action
  function addToCart() {
    dispatch(addProduct(cart.products.push(product)));
  }
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div className="ui grid container ">
      {Object.keys(product).length === 0 ? (
        <div>LOADING </div>
      ) : (
        <div className="cardBox">
          <div className="ui placeholder segment ">
            <div className="ui two column stackable center aligned grid cardBox">
              <div className="middle aligned row ">
                <div className="column lp">
                  <img className="singleImg" src={image} alt={title} />
                </div>
                <div className="column rp">
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
                  <div className="price fullPrice">
                    <a>$ {price}</a>
                  </div>
                  <p>{description}</p>
                  <div className="AddToCart" onClick={addToCart}>
                    <i className="shop icon"></i>
                    <div className="visible content">Add to cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
