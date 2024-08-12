import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";
import { ProductContext } from "../context/ProductsProvider";
import { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import "../styles/Navbar.css";
import { LuUser2 } from "react-icons/lu";
import { Login } from "./Login";

function Navbar() {
  const { cartData, favourite, isModalOpen, setModalOpen } =
    useContext(ProductContext);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <header className="header">
      <div className="logo">
        <Link to={"/"}>eShop</Link>
      </div>

      <div className="navIcons">
        <div>
          {" "}
          <LuUser2 size={"24px"} onClick={openModal} />
          <span className="badge badge-warning" id="lblCartCount">
            {"!"}
          </span>
        </div>
        <Login isOpen={isModalOpen} onClose={closeModal} />

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
