import { IoCartOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import "../styles/Navbar.css";
export function Navbar() {
  return (
    <header className="header">
      eShop
      <div className="navIcons">
        <IoCartOutline />
        <LuUser2 />
        <IoSearchOutline />
      </div>
    </header>
  );
}
