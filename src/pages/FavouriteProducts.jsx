import { Link } from "react-router-dom";
import React from "react";
import Favourite from "../components/Favourite";
import Navbar from "../components/Navbar";
import { ProductContext } from "../context/ProductsProvider";
import { useContext } from "react";
function FavouriteProducts() {
  const { favourite } = useContext(ProductContext);
  return (
    <>
      <Navbar />
      {favourite.length > 0 ? (
        <Favourite />
      ) : (
        <div className="empty-cart-body" style={{ height: "75vh" }}>
          <h4>No Items</h4>
          <div className="ecart-container">
            <Link to="/home">
              <button id="empty-cart-button">Add to favourites</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default FavouriteProducts;
