import "../styles/Cart.css";
import React from "react";
import { ProductContext } from "../context/ProductsProvider";
import { useContext } from "react";
export default function Cart() {
  const { setCartData, cartData } = useContext(ProductContext);
  function handleDelete(id) {
    const updatedProducts = cartData.filter((e) => e.id !== id);
    setCartData(updatedProducts);
  }
  return (
    <div>
      {" "}
      {cartData &&
        cartData.map((product) => (
          <div key={product.id}>
            <div className="img-container">
              <img
                className="card-img"
                src={product.images[0]}
                alt={product.title}
              />
            </div>
            <h4>Price: {product.finalPrice}</h4>
            <button onClick={() => handleDelete(product.id)}> Delete</button>
          </div>
        ))}
    </div>
  );
}
