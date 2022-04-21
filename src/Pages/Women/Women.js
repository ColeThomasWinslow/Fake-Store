import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Women = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <>
        {category === "women's clothing" && (
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
      </>
    );
  });

  return (
    <div>
      <div className="Page">
        <div className="PageTitle">
          <h2>Women's</h2>
        </div>
      </div>
      <div className="BigCont">
        <div className="cardsCont">{renderList}</div>
      </div>
    </div>
  );
};

export default Women;
