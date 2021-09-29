import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container header">
        <Link to="/">
          <h2 className="logo">FakeShop</h2>
        </Link>
      </div>
    </div>
  );
};
