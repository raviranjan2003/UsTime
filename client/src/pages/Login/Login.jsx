import React from 'react'
import { Link } from "react-router-dom";
import ReactTypingEffect from 'react-typing-effect';

function Login() {
  return (
    <main className="register">
      <div className="login_container">
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
              Login to <span className="app_name">UsTime</span>
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
            <input type="text" placeholder="Username" autoComplete='off' required />
            <input type="password" placeholder="Password" required />
          </div>
          <div className="register_field_button">
            <button className="register_btn">Login</button>
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

export default Login