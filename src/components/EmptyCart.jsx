import React from "react";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div>
      <div className="empty-cart-body">
        <h4>No Items</h4>
        <div className="ecart-container">
          <Link to="/product">
            <button id="empty-cart-button">+ ADD ITEMS</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
