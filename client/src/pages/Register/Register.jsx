import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";
import axios from "axios";
import { baseUrl } from "../../API/api";
import Loader from "../../components/Loader/Loader";

function Register() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const userData = {
    username,
    name,
    email,
    password,
  };

  const registerUser = async () => {
    setIsLoading(true);
    await axios
      .post(`${baseUrl}/auth/register`, userData)
      .then((res) => {
        setIsLoading(false);
        alert(res.data.message);
        if (res.status === 200) {
          navigate("/setavatar");
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      });
  };

  const handleRegister = () => {
    if (
      username.length < 1 ||
      name.length < 1 ||
      email.length < 1 ||
      password.length < 1 ||
      confirmPassword.length < 1
    ) {
      alert("Please fill all the fields");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      registerUser();
    }
  };

  return (
    <>
      {isLoading ? <Loader /> : 
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
                Register to <span className="app_name">UsTime</span>
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
          <form className="register_field">
            <div className="register_field_name">
              <input
                type="text"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                placeholder="Username"
              />
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                autoComplete="off"
              />
              <input
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                autoComplete="off"
              />
            </div>
            <div className="register_field_button">
              <button className="register_btn" onClick={handleRegister}>
                Register
              </button>
              <p>
                Already have an account ?{" "}
                <Link to="/login">
                  <span className="register_login_link">Login</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </main>
      }
    </>
  );
}

export default Register;
