import Cart from "../components/Cart";
import EmptyCart from "../components/EmptyCart";
import Navbar from "../components/Navbar";
import Toast from "../components/Toast";
import { ProductContext } from "../context/ProductsProvider";
import { useContext } from "react";
import Checkout from "../components/Checkout";

function MyCart() {
  const { cartData } = useContext(ProductContext);
  const style = {
    maxWidth: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
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
        <EmptyCart />
      )}
    </>
  );
}

export default MyCart;
