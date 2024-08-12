import Cart from "../components/Cart";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Toast from "../components/Toast";
import { ProductContext } from "../context/ProductsProvider";
import { useContext } from "react";
import Checkout from "../components/Checkout";
import "../styles/Cart.css";
function MyCart() {
  const { cartData } = useContext(ProductContext);
  const style = {
    maxWidth: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap-reverse",
  };
  return (
    <>
      <Toast />
      <Navbar />
      {cartData.length !== 0 ? (
        <div style={style}>
          <div>
            <Cart style={{ display: "flex", justifyContent: "center" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Checkout />
          </div>
        </div>
      ) : (
        <div className="empty-cart-body" style={{ height: "75vh" }}>
          <h4>No Items</h4>
          <div className="ecart-container">
            <Link to="/product">
              <button id="empty-cart-button">+ Add products</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default MyCart;
