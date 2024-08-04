import React, { createContext, useState } from "react";
import productsData from "../assets/productsData";
export const ProductContext = createContext({});

export const AppProvider = ({ children }) => {
  const Products = productsData;
  const [cartData, setCartData] = useState([]);
  const [notify, setNotify] = useState(false);
  const [message, setMessage] = useState("try");
  const [type, setType] = useState("");

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
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default AppProvider;
