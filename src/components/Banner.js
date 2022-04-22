import React from "react";
import SmLogo from "../icons/SmallLogo.png";
function Banner() {
  return (
    <div className="Banner">
      <div className="Text">
        <h1 className="bannerTitle">Welcome to Checkmark Marketplace</h1>
        <p className="CtaMessage">
          the number one spot to buy fake products that dont exists
        </p>{" "}
        <p className="productTypes">
          Clothing | Jewelry | Electronics{" "}
          <span>
            <img className="SmLogo" src={SmLogo} alt="SmLogo" />
          </span>
        </p>{" "}
      </div>
    </div>
  );
}

export default Banner;
