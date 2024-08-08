import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductsProvider";
import { useContext } from "react";
import Navbar from "./Navbar";

function ProductDetails() {
  const { id } = useParams();
  const { Products, setCartData, setNotify, setMessage, setType, setCount } =
    useContext(ProductContext);

  const product = Products.find((product) => product.id === parseInt(id));
  const [img, setImg] = useState(product.images[0]);

  if (!product) {
    return <div>Product not found</div>;
  }
  function handleImages(id) {
    console.log(id);
    const showImg = product.images.filter((_, i) => i === id);
    console.log("showImg ", showImg);
    setImg(showImg);
  }

  return (
    <>
      <div>
        <div className="allImages">
          <div
            className="image-small"
            style={{ width: "200px", display: "flex", gap: "10px" }}
          >
            {product.images.map((image, i) => (
              <img
                key={i}
                src={image}
                alt={product.title}
                style={{ objectFit: "cover", width: "100%" }}
                onClick={() => handleImages(i)}
              />
            ))}
          </div>
          <div
            className="main-image"
            style={{ width: "500px", display: "flex" }}
          >
            {" "}
            <img src={img} style={{ objectFit: "cover", width: "100%" }} />
          </div>
        </div>

        <h1>{product.title}</h1>
        <p>{product.info}</p>
        <p>Price: ${product.finalPrice}</p>
        <button
          onClick={() => {
            setCartData((prevCartData) => [...prevCartData, product]);
            setNotify(true);
            setMessage("Product added to cart");
            setType("success");
            setCount((prevCount) => prevCount + 1);
          }}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default ProductDetails;
