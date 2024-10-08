import React, { useContext } from "react";
import { ProductContext } from "../context/ProductsProvider";
import "../styles/Checkout.css";
function Checkout() {
  const { cartData } = useContext(ProductContext);

  const price = cartData.reduce(
    (acc, item) => (acc + item.originalPrice) * item.quantity,
    0
  );

  const total = cartData.reduce(
    (acc, item) => (acc + item.finalPrice) * item.quantity,
    0
  );
  const discount = price - total;
  return (
    <div>
      <div className="checkout-container">
        <div className="checkout-container-title">
          <h4>Order Summary : {cartData.length} </h4>
        </div>
        <div className="detail-Price">
          <span>
            <p> Price</p>{" "}
          </span>{" "}
          <span>
            <p>{price}</p>
          </span>
        </div>
        <div className="detail-Price">
          <span>
            <p>Discount</p>
          </span>
          <span style={{ color: "green" }}>
            <p> -{discount}</p>
          </span>
        </div>
        <div className="detail-Price">
          <span>
            <p>Delivery</p>{" "}
          </span>
          <span style={{ color: "green" }}>
            <p>Free</p>
          </span>
        </div>
        <hr id="divider" />
        <div className="detail-Price">
          <h4>Total Price </h4>
          <h4>{total} </h4>
        </div>

        <button id="checkout-button">Checkout</button>
      </div>
    </div>
  );
}

export default Checkout;
