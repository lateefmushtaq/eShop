import React, { useContext } from "react";
import { ProductContext } from "../context/ProductsProvider";
import { MdDelete } from "react-icons/md";
import { handleClick } from "../utils/helper";
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
    <div>
      {favourite.map((item) => (
        <div className="fav-main" key={item.id}>
          <div className="image-container-fav">
            <img src={item.images[0]} alt={item.title} />
          </div>
          <div className="item-title">
            <div className="item-title-heading">
              <p> Item Name:</p>
            </div>
            <div>
              <p>{item.title}</p>
            </div>
          </div>
          <div className="item-title">
            <div className="item-title-heading">
              <p> Item Price:</p>
            </div>
            <div>
              <p>${item.finalPrice}</p>
            </div>
          </div>

          <div style={{ display: "flex", gap: "24px" }} className="actions">
            <MdDelete
              className="fav-delete-icon"
              onClick={() => handleRemove(item.id)}
            />
            <button
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
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
