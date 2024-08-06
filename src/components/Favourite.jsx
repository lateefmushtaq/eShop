import React, { useState, useContext, useMemo } from "react";
import { ProductContext } from "../context/ProductsProvider";

export default function Favourite() {
  const { setFavourite, favourite } = useContext(ProductContext);
  function handleRemove(id) {
    setFavourite(favourite.filter((item) => item.id !== id));
  }
  return (
    <>
      <div style={{ height: "75vh" }}>
        {favourite.map((item, i) => (
          <div className="main">
            <p>{i + 1}</p>
            <div className="image-container-fav" style={{ width: "50px" }}>
              <img
                src={item.images[0]}
                alt={item.title}
                style={{ width: "100%" }}
              />
            </div>
            <p style={{ color: "green" }}> {item.title}</p>
            <button
              style={{
                color: "white",
                backgroundColor: "red",
                border: "none",
                padding: "12px",
              }}
              onClick={() => handleRemove(item.id)}
            >
              {" "}
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
