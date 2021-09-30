import React from "react";
import Search from "./Search";

function Banner() {
  return (
    <div className="Banner">
      <Search />
      <div>
        <h1 className="bannerTitle">Welcome to FakeShop</h1>
        <p>the number one spot to buy fake products that dont exists</p>
        <p className="productTypes"> Clothing | Jewelery | Electronics</p>
      </div>
    </div>
  );
}

export default Banner;
