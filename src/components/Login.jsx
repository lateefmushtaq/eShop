import { IoIosClose } from "react-icons/io";
import { ProductContext } from "../context/ProductsProvider";
import { useContext } from "react";
import React from "react";
import "../styles/Login.css";
export const Login = ({ isOpen }) => {
  const { setModalOpen } = useContext(ProductContext);
  if (!isOpen) return null;
  const closeModal = () => setModalOpen(false);
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.9)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="container">
        <div className="login">
          <div className="close">
            <h4>Login</h4>
            <IoIosClose size={"32px"} onClick={closeModal} id="close" />
          </div>

          <div className="input-field">
            <form>
              {" "}
              <span id="login-text">Welcome to eShop</span>
              <input type="email" placeholder="example@eshop.com" disabled />
              <input type="password" placeholder="**********" disabled />
              <button id="login-button">Login</button>
            </form>
          </div>
          <div className="divider">
            <hr id="divide" />

            <span>
              <p>or login with</p>
            </span>

            <hr id="divide" />
          </div>
          <div className="social">
            <button id="google">Google</button>
            <button id="fb">Facebook</button>
            <button id="x">X</button>
          </div>
          <div className="signup">
            <p>Create account?</p>
          </div>
        </div>
      </div>
    </div>
  );
};
