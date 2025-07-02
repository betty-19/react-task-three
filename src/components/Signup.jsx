import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SignUpSchema } from '../utils/validations.js';
import './Signup.css';
import PersonalInformation from "./PersonalInformation.jsx";
import { useNavigate } from "react-router-dom";




const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const nav= useNavigate();

  return (
    <div className="signup-wrapper">
      <div className="accounts">
        <div className="apple"><i className="bi bi-apple"></i></div>
        <div className="facebook"><i className="bi bi-facebook"></i></div>
        <div className="google"><i className="bi bi-google"></i></div>
      </div>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <p className="signup-option">or register with email</p>

            <div className="input">
              <div className="email-input">
                <p className="label">Email address</p>
                <Field name="email" type="text" className="custom-input" />
              </div>
              <div className="input-icons">
                <i className="bi bi-check check"></i>
              </div>
            </div>
            <ErrorMessage name="email" component="div" className="error" />

            <div className="input">
              <div className="password-input">
                <p className="label">Password</p>
                <Field name="password" type={showPassword ? 'text' : 'password'} className="custom-input" />
              </div>
              <div className="input-icons">
                <i className="bi bi-check check"></i>
                <i
                  className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} eye`}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              </div>
            </div>
            <ErrorMessage name="password" component="div" className="error" />

            <p className="characters">8+ characters</p>

            <button className="submit" type="submit" onClick={()=>{
              nav('/personalInformation')
            }}>Create account</button>

            <div className="send-me">
              <input type="checkbox" id="subscribe" />
              <p>Send me news and promotions</p>
            </div>
          </Form>
        )}
      </Formik>

      <p className="terms-conditions">
        By continuing I agree with the <a href="#">Terms & Conditions Privacy Policy</a>
      </p>
    </div>
  );
};

export default Signup;
