import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";

function Register() {
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
        <div className="register_field">
          <div className="register_field_name">
            <input type="text" placeholder="Username" required />
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
          </div>
          <div className="register_field_button">
            <button className="register_btn">Register</button>
            <p>
              Already have an account ?{" "}
              <Link to="/login">
                <span className="register_login_link">Login</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Register;
