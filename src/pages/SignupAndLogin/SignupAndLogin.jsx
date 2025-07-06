import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Login from "../Login/Login.jsx";
import Signup from "../Signup/Signup";
import './SignupAndLogin.css';

const SignupAndLogin = () => {
  const location = useLocation();
  const showLoginInitial = location.state?.showLogin || false;

  const [showLoginPage, setShowLoginPage] = useState(showLoginInitial);
  const [showSignupPage, setShowSignupPage] = useState(!showLoginInitial);

  const toggleSignUp = () => {
    setShowSignupPage(true);
    setShowLoginPage(false);
  };

  const toggleLogin = () => {
    setShowLoginPage(true);
    setShowSignupPage(false);
  };

  return (
    <div className="wrapper">
      <div className="signup-and-login-wrapper">
        <div className="register-login">
          <div className="register-login-links">
            <p className={`register ${showSignupPage ? 'active' : ''}`} onClick={toggleSignUp}>Register</p>
            <p className={`login ${showLoginPage ? 'active' : ''}`} onClick={toggleLogin}>Login</p>
          </div>
          <div className="close-icon">
            <i className="bi bi-x"></i>
          </div>
        </div>

        {showSignupPage && <Signup />}
        {showLoginPage && <Login />}
      </div>
    </div>
  );
};

export default SignupAndLogin;
