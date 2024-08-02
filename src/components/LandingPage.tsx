import "../styles/LandingPage.css";
import mainImage from "../assets/images/products/sonyXb910n-1.png";
function LandingPage() {
  return (
    <div className="main">
      <div className="details">SONY</div>
      <div className="image-container">
        {" "}
        <img src={mainImage}></img>
      </div>
    </div>
  );
}

export default LandingPage;
