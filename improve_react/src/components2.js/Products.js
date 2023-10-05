import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div>
        <input type="text" placeholder="Seach" />
      </div>
      <nav>
        <Link to="Featured">Featured</Link>
        <Link to="New">New</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Products;
