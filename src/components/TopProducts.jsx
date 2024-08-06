import React, { useState, useContext, useMemo } from "react";
import { ProductContext } from "../context/ProductsProvider";
import { FaStar } from "react-icons/fa";
import { BiCartAdd } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import "../styles/Featured.css";
import { handleClick } from "../utils/helper";

const productTypes = ["Headphones", "Earbuds", "Earphones", "Neckbands"];
function TopProducts() {
  const { Products, setCartData, setNotify, setMessage, setType, setCount } =
    useContext(ProductContext);
  const [activeProduct, setActiveProduct] = useState(null);
  const Headphones = useMemo(
    () => Products.filter((product) => product.category === "Headphones"),
    [Products]
  );
  const Earbuds = useMemo(
    () => Products.filter((product) => product.category === "Earbuds"),
    [Products]
  );
  const Earphones = useMemo(
    () => Products.filter((product) => product.category === "Earphones"),
    [Products]
  );
  const Neckbands = useMemo(
    () => Products.filter((product) => product.category === "Neckbands"),
    [Products]
  );

  const [showFeatured, setShowFeatured] = useState(Headphones);

  function handleTopProducts(id) {
    setActiveProduct(id);
    switch (id) {
      case "Headphones":
        setShowFeatured(Headphones);
        break;
      case "Earbuds":
        setShowFeatured(Earbuds);
        break;
      case "Neckbands":
        setShowFeatured(Neckbands);
        break;
      case "Earphones":
        setShowFeatured(Earphones);
        break;
      default:
        setShowFeatured(Headphones);
        break;
    }
  }

  return (
    <>
      {" "}
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
            <div className="card">
              <div className="card-image">
                <img src={product.images[0]} alt={product.title} />
              </div>
              <div className="card-details">
                <div className="rating">
                  <span> Ratings: {product.ratings}</span>
                </div>
                <h4 style={{ margin: "16px 0px" }}>{product.title}</h4>

                <hr id="divider" />
                <div className="cartBtn">
                  <h4 style={{ margin: "16px 0px" }}>{product.finalPrice}</h4>
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

                  <FaRegHeart style={{ fontSize: "24px" }} />
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
