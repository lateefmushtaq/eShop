import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";
import { ProductContext } from "../context/ProductsProvider";
import { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const { cartData, favourite } = useContext(ProductContext);
  return (
    <header className="header">
      <div className="logo">
        <Link to={"/"}>eShop</Link>
      </div>

      <div className="navIcons">
        <Link to={"/favourite"}>
          <FaRegHeart size={"24px"} />
          <span className="badge badge-warning" id="lblCartCount">
            {favourite && favourite.length}
          </span>
        </Link>
        <Link to={"/cart"}>
          <FaCartArrowDown size={"24px"} />
          <span className="badge badge-warning" id="lblCartCount">
            {cartData && cartData.length}
          </span>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
