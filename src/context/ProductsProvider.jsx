import React, { createContext, useState } from "react";
import productsData from "../assets/productsData";
export const ProductContext = createContext({});

export const AppProvider = ({ children }) => {
  const Products = productsData;
  const [cartData, setCartData] = useState([]);
  const [notify, setNotify] = useState(false);
  const [message, setMessage] = useState("try");
  const [type, setType] = useState("");
  const [count, setCount] = useState(0);
  const [favourite, setFavourite] = useState([]);

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
        setCount,
        count,
        favourite,
        setFavourite,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default AppProvider;
