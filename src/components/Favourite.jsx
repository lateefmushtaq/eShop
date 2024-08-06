import React, { useState, useContext, useMemo } from "react";
import { ProductContext } from "../context/ProductsProvider";
import { MdDeleteOutline } from "react-icons/md";
export default function Favourite() {
  const { setFavourite, favourite } = useContext(ProductContext);
  function handleRemove(id) {
    setFavourite(favourite.filter((item) => item.id !== id));
  }
  return (
    <>
      <div style={{ height: "75vh" }}>
        {favourite.map((item, i) => (
          <div
            className="main"
            key={item.id}
            style={{ backgroundColor: "#2d2d2d" }}
          >
            <p>{i + 1}</p>
            <div
              className="image-container-fav"
              style={{
                width: "50px",
              }}
            >
              <img
                src={item.images[0]}
                alt={item.title}
                style={{ width: "100%" }}
              />
            </div>
            <p style={{ color: "green" }}> {item.title}</p>{" "}
            <MdDeleteOutline
              size={"32px"}
              color="red"
              onClick={() => handleRemove(item.id)}
            />
          </div>
        ))}
      </div>
    </>
  );
}
