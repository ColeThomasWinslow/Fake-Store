import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div key={id}>
        <div className="card">
          <Link to={`/products/${id}`}>
            <div className="meta price">$ {price}</div>{" "}
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
            <div className="imgWrap">
              {" "}
              <img className="image" src={image} alt={title} />{" "}
              <div className="content">
                <h4 className="title">{title}</h4>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  });

  return <div className="cardsCont">{renderList}</div>;
};

export default ProductComponent;
