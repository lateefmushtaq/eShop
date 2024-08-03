import productsData from "../../src/assets/productsData";
import "../styles/ProductCard.css";
import { FaStar } from "react-icons/fa";
import { BiCartAdd } from "react-icons/bi";
interface Product {
  id: number;
  tag?: string;
  tagline?: string;
  heroImage?: string;
  images: string[];
  title: string;
  category: string;
  type?: string;
  connectivity?: string;
  finalPrice: number;
  originalPrice: number;
  ratings: number;
  rateCount?: number;
  path: string;
  info?: string;
}

function ProductCard() {
  return productsData.map((product: Product) => (
    <div className="card" key={product.id}>
      <div className="img-container">
        <img className="card-img" src={product.images[0]} alt={product.title} />
      </div>
      <div className="card-details">
        <div className="rating">
          <p>
            {[...Array(product.rateCount || 0)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </p>
          <p> Ratings: {product.ratings}</p>
        </div>
        <h4>{product.title}</h4>{" "}
        <p>{product.tagline ? product.tagline : product.info}</p>
        <div className="category">
          <p id="category-info">{product.category}</p>
          <p id="category-info">{product.type}</p>
          <p id="category-info">{product.connectivity}</p>
        </div>
        <hr id="divider" />
        <h4>Price: {product.finalPrice}</h4>
        <button id="cart-button">
          {" "}
          <BiCartAdd style={{ fontSize: "24px" }} /> Add to cart
        </button>
      </div>
    </div>
  ));
}

export default ProductCard;
