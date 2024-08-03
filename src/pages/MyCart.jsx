import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import Navbar from "../components/Navbar";

function MyCart() {
  const style = {
    display: "flex",
    justifyContent: "space-around",
  };
  return (
    <>
      <Navbar />
      <div style={style}>
        <Cart />
        <Checkout />
      </div>
    </>
  );
}

export default MyCart;
