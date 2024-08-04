import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import Navbar from "../components/Navbar";
import Toast from "../components/Toast";

function MyCart() {
  const style = {
    display: "flex",
    justifyContent: "space-around",
  };
  return (
    <>
      <Toast />
      <Navbar />
      <div style={style}>
        <Cart />
        <Checkout />
      </div>
    </>
  );
}

export default MyCart;
