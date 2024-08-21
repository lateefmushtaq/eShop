import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

import Toast from "../components/Toast";
import { ProductContext } from "../context/ProductsProvider";
import { useContext, useEffect } from "react";
export default function Products() {
  const { Products, setCartData, cartData, setNotify, type, message } =
    useContext(ProductContext);

  return (
    <>
      <Navbar />
      <Toast type={type} message={message} />

      <div className="main" style={{ display: "flex" }}>
        <ProductCard />
      </div>
    </>
  );
}
