import "../styles/Cart.css";
import React, { useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { ProductContext } from "../context/ProductsProvider";
import { useContext } from "react";

export default function Cart() {
  const { setCartData, cartData, setNotify, setMessage, setType } =
    useContext(ProductContext);

  function handleDelete(id) {
    const updatedData = cartData.filter((e) => e.id !== id);
    setCartData(updatedData);
    setNotify(true);
    setMessage("Item Removed");
    setType("error");
  }
  return (
    <div>
      {cartData.length !== 0 &&
        cartData.map((item) => (
          <div className="cart-container" key={item.id}>
            <div className="cart">
              <div className="quantity">
                <p>Quantity: {item.quantity}</p>
              </div>
              <div className="item-img">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="card-img"
                />
              </div>
              <div className="item-info">
                <span>
                  <p>{item.title}</p>
                  <span> {item.info}</span>
                </span>
                <span>
                  <p>
                    {item.finalPrice}{" "}
                    <span
                      style={{
                        textDecoration: "line-through",
                        color: "#f8f8f847",
                        marginLeft: "8px",
                      }}
                    >
                      {item.originalPrice}
                    </span>
                  </p>
                </span>
              </div>
              <div className="delete">
                <button id="delete-btn" onClick={() => handleDelete(item.id)}>
                  <MdOutlineDeleteOutline style={{ marginRight: "4px" }} />{" "}
                  Remove from cart
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
