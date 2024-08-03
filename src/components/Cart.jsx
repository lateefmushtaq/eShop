import "../styles/Cart.css";
import React from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { ProductContext } from "../context/ProductsProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const { setCartData, cartData } = useContext(ProductContext);
  function handleDelete(id) {
    const updatedProducts = cartData.filter((e) => e.id !== id);
    setCartData(updatedProducts);
  }
  return (
    <div className="cart">
      {cartData.length !== 0 ? (
        cartData.map((item) => (
          <div className="cart-body">
            <div className="data">
              <div className="item-img">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="card-img"
                />
              </div>

              <div className="item-info">
                <span>
                  <p style={{ margin: "0px" }}>
                    {item.title} {item.info}
                  </p>
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

              <div class="delete">
                <MdOutlineDeleteOutline
                  size={"32px"}
                  onClick={() => handleDelete(item.id)}
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="cart-body">
          No Items here{" "}
          <div className="cart-body">
            <Link to="/product">
              <button id="cart-button">+ ADD ITEMS</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
