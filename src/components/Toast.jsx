import { useEffect } from "react";
import { toast, ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { ProductContext } from "../context/ProductsProvider";

export default function Toast() {
  const { cartData, notify, setNotify, message, type, count } =
    useContext(ProductContext);

  useEffect(() => {
    if (notify && type) {
      toast[type](message, {
        position: "top-center",
        autoClose: 4000,
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
