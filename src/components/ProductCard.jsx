import "../styles/ProductCard.css";
import { FaStar } from "react-icons/fa";
import { BiCartAdd } from "react-icons/bi";
import { handleClick } from "../utils/helper";
import { ProductContext } from "../context/ProductsProvider";
import { useContext } from "react";

function ProductCard() {
  const { Products, setCartData, setNotify, setMessage, setType, setCount } =
    useContext(ProductContext);
  return Products.map((product) => {
    console.log(product.title, "> ", product.images);
    return (
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
          <div className="category">
            <span id="category-info">{product.category}</span>
            <span id="category-info">{product.type}</span>
            <span id="category-info">{product.connectivity}</span>
          </div>
          <hr id="divider" />
          <h4 style={{ margin: "16px 0px" }}>Price: {product.finalPrice}</h4>
          <button
            id="cart-button"
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
            <BiCartAdd style={{ fontSize: "24px" }} /> Add to cart
          </button>
        </div>
      </div>
    );
  });
}

export default ProductCard;
