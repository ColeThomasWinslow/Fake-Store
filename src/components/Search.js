import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Search() {
  const products = useSelector((state) => state.allProducts.products);
  const [Search, setSearch] = useState("");
  return (
    <div>
      <div className="search">
        <input
          placeholder="Search For Products"
          onChange={(event) => setSearch(event.target.value)}
        />
        {Search === "" ? (
          <div></div>
        ) : (
          products
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
                <div className="searchQ" key={value.id}>
                  <Link to={`/products/${value.id}`}>
                    <p>{value.title}</p>
                  </Link>
                </div>
              );
            })
        )}
      </div>
    </div>
  );
}

export default Search;
