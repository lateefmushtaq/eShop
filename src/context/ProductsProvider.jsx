import React, { createContext, useState } from "react";
import productsData from "../assets/productsData";
export const ProductContext = createContext({});

export const AppProvider = ({ children }) => {
  const Products = productsData;
  const [cartData, setCartData] = useState([]);

  return (
    <ProductContext.Provider
      value={{
        Products,
        setCartData,
        cartData,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default AppProvider;
