import React, { useContext } from "react";
import { ProductContext } from "../context/ProductsProvider";
import { MdDeleteOutline } from "react-icons/md";
import { handleClick } from "../utils/helper";
import { BiCartAdd } from "react-icons/bi";
import "../styles/Favourite.css";

export default function Favourite() {
  const {
    favourite,
    setFavourite,
    setCartData,
    setNotify,
    setMessage,
    setType,
    setCount,
    Products,
  } = useContext(ProductContext);

  function handleRemove(id) {
    setFavourite(favourite.filter((item) => item.id !== id));
  }

  return (
    <div style={{ height: "75vh" }}>
      {favourite.map((item, i) => (
        <div className="main" key={item.id}>
          <p>{i + 1}</p>
          <div className="image-container-fav">
            <img src={item.images[0]} alt={item.title} />
          </div>
          <p className="item-title">{item.title}</p>
          <div style={{ display: "flex", gap: "24px" }}>
            <MdDeleteOutline
              size="32px"
              className="delete-icon"
              onClick={() => handleRemove(item.id)}
            />

            <BiCartAdd
              className="cart-button-icon"
              onClick={() =>
                handleClick(
                  item.id,
                  setCartData,
                  setNotify,
                  setMessage,
                  setType,
                  setCount,
                  Products
                )
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
}
