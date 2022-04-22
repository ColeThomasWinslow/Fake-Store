import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

export const ProductListing = () => {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });

    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="">
      <div className="PageTitle">
        <h2>Shop All Products</h2>
      </div>
      <ProductComponent />
    </div>
  );
};
