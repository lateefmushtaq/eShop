import React, { createContext, useState, useEffect } from "react";
import productsData from "../assets/productsData";
export const ProductContext = createContext({});

export const AppProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const Products = productsData;
  const [cartData, setCartData] = useState(() => {
    const savedCart = localStorage.getItem("Cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [notify, setNotify] = useState(false);
  const [message, setMessage] = useState("try");
  const [type, setType] = useState("");
  const [favourite, setFavourite] = useState(() => {
    const favItem = localStorage.getItem("Favourite");
    return favItem ? JSON.parse(favItem) : [];
  });

  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(cartData));
  }, [cartData]);
  useEffect(() => {
    localStorage.setItem("Favourite", JSON.stringify(favourite));
  }, [favourite]);

  return (
    <ProductContext.Provider
      value={{
        Products,
        setCartData,
        cartData,
        setNotify,
        notify,
        setMessage,
        message,
        type,
        setType,
        favourite,
        setFavourite,
        isModalOpen,
        setModalOpen,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default AppProvider;
