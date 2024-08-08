import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductsProvider";
import { useContext } from "react";
import "../styles/Product.css";
import { handleClick } from "../utils/helper";
import { MdOutlineDone } from "react-icons/md";
import { FaStar } from "react-icons/fa";
function ProductDetails() {
  const { id } = useParams();
  const { Products, setCartData, setNotify, setMessage, setType, setCount } =
    useContext(ProductContext);

  const product = Products.find((product) => product.id === parseInt(id));
  const [img, setImg] = useState(product.images[0]);
  const [isSelected, setSelected] = useState(0);

  if (!product) {
    return <div>Product not found</div>;
  }
  function handleImages(id) {
    const showImg = product.images.filter((_, i) => i === id);
    setImg(showImg);
    setSelected(id);
  }
  const discount = product.originalPrice - product.finalPrice;
  const percentageDiscount = ((discount / product.originalPrice) * 100).toFixed(
    0
  );
  return (
    <>
      <div className="card-detail-main">
        <div className="image-small">
          <div className="div">
            {product.images.map((image, i) => (
              <div style={{ padding: "8px" }}>
                {" "}
                <img
                  key={i}
                  id={isSelected === i ? "activesmallImage" : "smallImage"}
                  src={image}
                  alt={product.title}
                  style={{ objectFit: "cover", width: "100%" }}
                  onClick={() => handleImages(i)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="main-image-product">
          {" "}
          <img src={img} style={{ objectFit: "cover", maxWidth: "100%" }} />
        </div>

        <div>
          <h1>{product.title}</h1>
          <p>{product.info}</p>
          <div className="rating">
            <span>
              {[...Array(product.rateCount || 0)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </span>
            <span> Ratings: {product.ratings}</span>
          </div>
          <hr id="divider" />

          <div className="price">
            <p>Price: ${product.finalPrice}</p>
            <span
              style={{
                textDecoration: "line-through",
                marginLeft: "4px",
                color: "#ffffff5b",
              }}
            >
              <p> {product.originalPrice}</p>
            </span>
            <span id="stock">
              <MdOutlineDone style={{ marginRight: "8px" }} />
              In Stock
            </span>
          </div>
          <span style={{ color: "green" }}>
            You save ${discount} ( {percentageDiscount}%)
          </span>
          <hr id="divider" />
          <button
            id="productBtn"
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
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
