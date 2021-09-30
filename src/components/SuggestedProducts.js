import React, { useState } from "react";
import { useSelector } from "react-redux";
import Carousel from "react-simply-carousel";
import { Link } from "react-router-dom";
function SuggestedProducts() {
  const products = useSelector((state) => state.allProducts.products);
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div>
      <h2>Suggested Products</h2>
      <div className="carouselCont">
        {" "}
        <Carousel
          activeSlideIndex={activeSlide}
          onRequestChange={setActiveSlide}
          autoplay={true}
          infinite={true}
          delay={1900}
          speed={2000}
          containerProps={{
            style: {
              justifyContent: "space-between",
            },
          }}
          forwardBtnProps={{
            style: {
              width: 0,
              height: 5,
              minWidth: 5,
              alignSelf: "center",
            },
          }}
          backwardBtnProps={{
            style: {
              width: 0,
              height: 5,
              minWidth: 5,
              alignSelf: "center",
            },
          }}
          responsiveProps={[
            { minWidth: 400, itemsToShow: 3 },
            { maxWidth: 767, itemsToShow: 1 },
          ]}
        >
          {products.map((item) => (
            <div className="card scrollCard">
              <Link to={`/products/${item.id}`}>
                <div className="meta price">$ {item.price}</div>{" "}
                {item.category === "men's clothing" && (
                  <div className="meta cat mens">{item.category}</div>
                )}
                {item.category === "electronics" && (
                  <div className="meta cat electronics">{item.category}</div>
                )}
                {item.category === "jewelery" && (
                  <div className="meta cat jewelery">{item.category}</div>
                )}
                {item.category === "women's clothing" && (
                  <div className="meta cat women">{item.category}</div>
                )}
                <div className="imgWrap">
                  <img width="150px" src={item.image} alt={item.title} />{" "}
                  <div className="content">
                    <h4 className="title">{item.title}</h4>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default SuggestedProducts;
