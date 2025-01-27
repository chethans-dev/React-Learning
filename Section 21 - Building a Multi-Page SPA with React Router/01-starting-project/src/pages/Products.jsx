import React from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: 1, title: "Product 1" },
  { id: 2, title: "Product 2" },
  { id: 3, title: "Product 3" },
];

const Products = () => {
  return (
    <>
      <h1>The products page</h1>
      <ul>
        {PRODUCTS.map((product) => {
          return (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Products;
