import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchIcon from "../icons/Search.svg";
import { Link } from "react-router-dom";
function Search() {
  const products = useSelector((state) => state.allProducts.products);
  const [Search, setSearch] = useState("");
  const Clear = () => {
    setSearch("");
  };
  return (
    <div>
      <div className="search">
        <div className="Box">
          <input
            value={Search}
            placeholder="Search For Products"
            onChange={(event) => setSearch(event.target.value)}
          />
          <img src={SearchIcon} alt="Search" />
        </div>
        {Search === "" ? (
          <div></div>
        ) : (
          <div className="searchQ">
            {products
              .filter((value) => {
                if (Search === " ") {
                  return value;
                } else if (
                  value.title.toLowerCase().includes(Search.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((value) => {
                return (
                  <Link
                    className="Suggested"
                    key={value.id}
                    to={`/products/${value.id}`}
                  >
                    <img src={value.image} className="SmallImg" />
                    <p onClick={Clear}>{value.title}</p>
                  </Link>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
