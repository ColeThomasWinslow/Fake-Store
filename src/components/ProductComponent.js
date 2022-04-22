import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price } = product;
    return (
      <div className="card" key={id}>
        <Link to={`/products/${id}`}>
          <div className="imgWrap">
            <img className="image" src={image} alt={title} />
            <div className="content">
              <div className=" price">$ {price}</div>
              <h4 className="title">{title}</h4>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div className="BigCont">
      <div className="cardsCont">{renderList}</div>
    </div>
  );
};

export default ProductComponent;
