import { useEffect, useContext } from "react";
import { toast, ToastContainer, Slide } from "react-toastify";
import { ProductContext } from "../context/ProductsProvider";
import "react-toastify/dist/ReactToastify.css";

export default function Toast() {
  const { cartData, notify, setNotify, message, type } =
    useContext(ProductContext);

  useEffect(() => {
    if (notify && type) {
      toast[type](message, {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });

      setNotify(false);
    }
  }, [cartData, notify, message, type]);

  return (
    <>
      <ToastContainer />
    </>
  );
}
