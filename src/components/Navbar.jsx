import { Link, useNavigate } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";
import { ProductContext } from "../context/ProductsProvider";
import { useContext, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { LuUser2 } from "react-icons/lu";
import { Login } from "./Login";
import { CiSearch } from "react-icons/ci";
import "../styles/Navbar.css";
function Navbar() {
  const { cartData, favourite, isModalOpen, setModalOpen } =
    useContext(ProductContext);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
    search.length > 0 && navigate(`/search?q=${search}`);
  }

  return (
    <header className="header">
      <div className="logo">
        <Link to={"/"}>eShop</Link>
      </div>

      <div className="navIcons">
        <div className="search">
          <input
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <CiSearch id="searchIcon" size={"24px"} onClick={handleSearch} />
        </div>
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
