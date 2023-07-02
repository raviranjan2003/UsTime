import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";
import axios from "axios";
import { baseUrl } from "../../API/api";
import Loader from "../../components/Loader/Loader";
import { BiError } from 'react-icons/bi';

function Register() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [userNameError, setUserNameError] = useState(null);
  const [emptyFieldError, setEmptyFieldError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

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
        if (res.status === 200) {
          navigate("/login");
        }
        else if (res.status === 208) {
          if (res.data.message.includes("Email")) {
            setEmailError(res.data.message);
            setTimeout(() => {
              setEmailError(null);
            }, 3000);
            return;
          } else if (res.data.message.includes('Username')) {
            setUserNameError(res.data.message);
            setTimeout(() => {
              setUserNameError(null);
            }, 3000);
            return;
          } else {
            setEmptyFieldError(res.data.message);
            setTimeout(() => {
              setEmptyFieldError(null);
            }, 3000);
            return;
          }
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (
      username.length < 1 ||
      name.length < 1 ||
      email.length < 1 ||
      password.length < 1 ||
      confirmPassword.length < 1
    ) {
      setEmptyFieldError("Please fill all the fields");
      setTimeout(() => {
        setEmptyFieldError(null);
      }, 3000);
      return;
    } else if (email.includes("@") === false || email.includes(".") === false) {
      setEmailError("Please enter a valid email");
      setTimeout(() => {
        setEmailError(null);
      }, 3000);
      return;
    } else if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      setTimeout(() => {
        setPasswordError(null);
      }, 3000);
      return;
    }
    else {
      registerUser();
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
                {emptyFieldError && <p class="error_text"><BiError /> {emptyFieldError}</p>}
                <input
                  type="text"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  placeholder="Username"
                />
                {userNameError && <p class="error_text"><BiError /> {userNameError}</p>}
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
                {emailError && <p class="error_text"><BiError /> {emailError}</p>}
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
                {passwordError && <p class="error_text"><BiError /> {passwordError}</p>}
              </div>
              <div className="register_field_button">
                <button className="register_btn" onClick={(e) => handleRegister(e)}>
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
      )}
    </>
  );
}

export default Register;
