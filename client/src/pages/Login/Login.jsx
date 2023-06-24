import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";
import "./Login.css";
import axios from "axios";
import { baseUrl } from "../../API/api.js";
import AuthContext from "../../auth/authContext";

function Login() {
  const [usernameoremail, setUsernameoremail] = useState("");
  const [Password, setPassword] = useState("");
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
      await axios.post(`${baseUrl}/auth/login`, {
        usernameoremail: usernameoremail,
        password: Password,
      })
      .then((res) => {
        if (res.status === 200) {
          const user = {
            token: res.data.token,
            expiresIn: res.data.expiresIn,
          }
          authContext.login(user);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <main className="register">
      <div className="register_container">
        <div className="register_logo">
          <div className="register_logo_container">
            <img
              src="/images/UT.png"
              alt="UsTime Logo"
              className="register_logo_img"
            />
          </div>
          <div className="register_logo_desc">
            <h1 className="register_logo_heading">
              Welcome to <span className="app_name">UsTime</span>
            </h1>
            <p className="register_logo_tagline">
              Spend quality time with your{" "}
              <span className="typing">
                <ReactTypingEffect
                  text={[" Family.", " Friends.", " Relatives."]}
                  speed={100}
                  eraseSpeed={100}
                  eraseDelay={1000}
                  typingDelay={1000}
                />
              </span>
            </p>
          </div>
        </div>
        <div className="register_field">
          <form className="register_field_name">
            <input
              type="text"
              placeholder="Username / Email"
              onChange={(e) => setUsernameoremail(e.target.value)}
              autoComplete="off"
              required
            />
            <input
              type="password"
              placeholder="Password"
              required
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
          <div className="register_field_button">
            <button className="register_btn" onClick={handleLogin}>Login</button>
            <p>
              Don't have an account ?{" "}
              <Link to="/register">
                <span className="register_login_link">Register</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
