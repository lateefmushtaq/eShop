import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import EmptyCart from "../components/EmptyCart";
import Navbar from "../components/Navbar";
import Toast from "../components/Toast";
import { ProductContext } from "../context/ProductsProvider";
import { useContext } from "react";

function MyCart() {
  const { cartData } = useContext(ProductContext);
  const style = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  };
  return (
    <>
      <Toast />
      <Navbar />
      {cartData.length !== 0 ? (
        <div style={style}>
          <Cart />
          <Checkout />
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}

export default MyCart;
