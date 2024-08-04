import React from "react";
import "../styles/Login.css";
import { IoIosClose } from "react-icons/io";
function Login() {
  return (
    <div className="container">
      <div className="login">
        <div className="close">
          <h4>Login</h4>
          <IoIosClose size={"32px"} />
        </div>

        <div className="input-field">
          <span id="login-text">Welcome to eShop</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button id="login-button">Login</button>
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
  );
}

export default Login;
