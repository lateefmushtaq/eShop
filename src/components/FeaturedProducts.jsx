import React, { useState, useContext, useMemo } from "react";
import { ProductContext } from "../context/ProductsProvider";
import { useNavigate } from "react-router-dom";
function FeaturedProducts() {
  const navigate = useNavigate();
  const { Products } = useContext(ProductContext);
  const featured = useMemo(
    () => Products.filter((product) => product.tag === "featured-product"),
    [Products]
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h4 id="heading">Featured Products</h4>

      <div className="top-container">
        {featured &&
          featured.map((product) => (
            <div className="top-products" key={product.id}>
              <p id="title">{product.title}</p>
              <img
                src={product.images[0]}
                alt=""
                className="top-image"
                onClick={() => navigate(`/product/${product.id}`)}
              />
              <p id="price-id">
                ${product.finalPrice} <span>{product.originalPrice}</span>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
