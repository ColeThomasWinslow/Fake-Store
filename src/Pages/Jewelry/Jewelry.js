import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Jewelry = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div key={id}>
        {category === "jewelery" && (
          <div className="card" key={id}>
            <Link to={`/products/${id}`}>
              <div className="imgWrap">
                <img className="image" src={image} alt={title} />{" "}
                <div className="content">
                  <div className="meta price">$ {price}</div>
                  <h4 className="title">{title}</h4>
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    );
  });

  return (
    <div>
      <div className="Page">
        <div className="PageTitle">
          <h2>Jewelry</h2>
        </div>
      </div>
      <div className="BigCont">
        <div className="cardsCont">{renderList}</div>
      </div>
    </div>
  );
};

export default Jewelry;
