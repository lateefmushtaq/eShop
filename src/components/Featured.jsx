import React, { useState, useContext, useMemo } from "react";
import { ProductContext } from "../context/ProductsProvider";
import { FaStar } from "react-icons/fa";
import { BiCartAdd } from "react-icons/bi";
import "../styles/Featured.css";

const defaultStyle = {
  padding: "8px 12px",
  borderRadius: "4px",
};
const activeStyle = {
  backgroundColor: "#fa5639",
  padding: "8px 12px",
  borderRadius: "4px",
};

function Featured() {
  const { Products } = useContext(ProductContext);
  const all = useMemo(
    () => Products.filter((product) => product.tag === "featured-product"),
    [Products]
  );
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

  const [showFeatured, setShowFeatured] = useState(all);
  const [activeCategory, setActiveCategory] = useState("All");

  function handleTopProducts(id) {
    setActiveCategory(id);
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
        setShowFeatured(all);
        break;
    }
  }

  return (
    <div className="featured">
      <h4 style={{ textAlign: "center" }}>Top Products</h4>
      <div className="tab">
        <ul>
          <li
            onClick={() => handleTopProducts("All")}
            style={activeCategory === "All" ? activeStyle : defaultStyle}
          >
            All
          </li>
          <li
            onClick={() => handleTopProducts("Headphones")}
            style={activeCategory === "Headphones" ? activeStyle : defaultStyle}
          >
            Headphones
          </li>
          <li
            onClick={() => handleTopProducts("Earbuds")}
            style={activeCategory === "Earbuds" ? activeStyle : defaultStyle}
          >
            Earbuds
          </li>
          <li
            onClick={() => handleTopProducts("Earphones")}
            style={activeCategory === "Earphones" ? activeStyle : defaultStyle}
          >
            Earphones
          </li>
          <li
            onClick={() => handleTopProducts("Neckbands")}
            style={activeCategory === "Neckbands" ? activeStyle : defaultStyle}
          >
            Neckbands
          </li>
        </ul>
      </div>
      <div className="main">
        {showFeatured.map((product) => (
          <div className="card" key={product.id}>
            <div className="img-container">
              <img
                className="card-img"
                src={product.images[0]}
                alt={product.title}
              />
            </div>
            <div className="card-details">
              <div className="rating">
                <span>
                  {[...Array(product.rateCount || 0)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </span>
                <span> Ratings: {product.ratings}</span>
              </div>
              <h4 style={{ margin: "16px 0px" }}>{product.title}</h4>
              <h5>{product.tagline ? product.tagline : product.info}</h5>

              <hr id="divider" />
              <h4 style={{ margin: "16px 0px" }}>
                Price: {product.finalPrice}
              </h4>
              <button id="cart-button" onClick={() => handleClick(product.id)}>
                <BiCartAdd style={{ fontSize: "24px" }} /> Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
