import React, { useState, useContext, useMemo } from "react";
import { ProductContext } from "../context/ProductsProvider";
import { BiCartAdd } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import "../styles/Featured.css";
import { handleClick } from "../utils/helper";

const productTypes = ["Headphones", "Earbuds", "Earphones", "Neckbands"];

function TopProducts() {
  const {
    Products,
    setCartData,
    setNotify,
    setMessage,
    setType,
    setCount,
    setFavourite,
    favourite,
  } = useContext(ProductContext);

  const [activeProduct, setActiveProduct] = useState("Headphones");
  const [showFeatured, setShowFeatured] = useState([]);

  useMemo(() => {
    const filteredProducts = Products.filter(
      (product) => product.category === activeProduct
    );
    setShowFeatured(filteredProducts);
  }, [Products, activeProduct]);

  function handleFavourite(id) {
    const isAlreadyFav = favourite.some((item) => item.id === id);
    if (isAlreadyFav) {
      setFavourite(favourite.filter((item) => item.id !== id));
    } else {
      const favProduct = Products.find((item) => item.id === id);
      setFavourite([...favourite, favProduct]);
      setNotify(true);
      setMessage("Added to favourites");
      setType("success");
    }
  }

  function handleTopProducts(productType) {
    setActiveProduct(productType);
  }

  return (
    <>
      <h4 id="heading">Top Products</h4>
      <div className="featured">
        <div className="tab">
          <ul>
            {productTypes.map((productType) => (
              <li
                className={`product-item ${
                  activeProduct === productType ? "active" : ""
                }`}
                key={productType}
                onClick={() => handleTopProducts(productType)}
              >
                {productType}
              </li>
            ))}
          </ul>
        </div>

        <div className="top-products-container">
          {showFeatured.map((product) => (
            <div key={product.id} className="top-card">
              <div className="card-image">
                <img src={product.images[0]} alt={product.title} />
              </div>
              <div className="card-details">
                <span>Ratings: {product.ratings}</span>
                <div className="rating"></div>
                <h4 style={{ margin: "16px 0px" }}>{product.title}</h4>
                <hr id="divider" />
                <div className="cartBtn">
                  <h4 style={{ margin: "16px 0px" }}>${product.finalPrice}</h4>
                  <button
                    id="cart-button-icon"
                    onClick={() =>
                      handleClick(
                        product.id,
                        setCartData,
                        setNotify,
                        setMessage,
                        setType,
                        setCount,
                        Products
                      )
                    }
                  >
                    <BiCartAdd style={{ fontSize: "24px" }} />
                  </button>

                  <FaRegHeart
                    style={{
                      fontSize: "24px",
                      color: favourite.some((item) => item.id === product.id)
                        ? "red"
                        : "",
                    }}
                    onClick={() => handleFavourite(product.id)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TopProducts;
