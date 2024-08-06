import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { ProductContext } from "../context/ProductsProvider";
import { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const { cartData } = useContext(ProductContext);
  return (
    <header className="header">
      <Link to={"/"}>eShop</Link>
      <Link to={"/product"}>Products</Link>

      <div className="navIcons">
        <Link to={"/favourite"}>
          <FaRegHeart size={"24px"} />
        </Link>
        <Link to={"/cart"}>
          <IoCartOutline size={"24px"} />
          {cartData.length > 0 && <span id="cart">{cartData.length}</span>}
        </Link>
        <LuUser2 size={"24px"} />
        <IoSearchOutline size={"24px"} />
      </div>
    </header>
  );
}

export default Navbar;
