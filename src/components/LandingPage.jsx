import "../styles/LandingPage.css";
import mainImage from "/images/products/sonyXb910n-1.png";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="image-info">
        <h4>Sony H4-XB72</h4>
        <h1>Give your favourite music a boost</h1>
        <h4>
          $1200 <span id="discount">$2000</span>
        </h4>
        <button onClick={() => navigate("/product")} id="ShopButton">
          Shop Now <FaLongArrowAltRight style={{ marginLeft: "4px" }} />
        </button>
      </div>
      <div className="image-container">
        <img id="image-1" src={mainImage}></img>
      </div>
    </div>
  );
}

export default LandingPage;
