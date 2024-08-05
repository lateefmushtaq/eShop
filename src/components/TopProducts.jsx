import React, { useState, useContext, useMemo } from "react";
import { ProductContext } from "../context/ProductsProvider";
import { BiCartAdd } from "react-icons/bi";
import "../styles/Top.css";

function TopProducts() {
  const { Products } = useContext(ProductContext);
  const featured = useMemo(
    () => Products.filter((product) => product.tag === "featured-product"),
    [Products]
  );

  return (
    <div className="featured">
      <h4 style={{ textAlign: "center" }}>Featured Products</h4>
      <div className="main">
        {featured.map((product) => (
          <div className="card" key={product.id}>
            <div className="img-container">
              <img
                className="card-img"
                src={product.images[0]}
                alt={product.title}
              />
            </div>
            <div className="card-details">
              <div
                className="price"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <h4 style={{ margin: "16px 0px" }}>
                  Price: {product.finalPrice}
                </h4>
                <h4
                  style={{
                    margin: "16px 0px",
                    textDecoration: "line-through",
                    color: "red",
                  }}
                >
                  {product.originalPrice}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopProducts;
