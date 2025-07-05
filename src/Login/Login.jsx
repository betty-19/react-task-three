import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SignUpSchema } from '../../utils/validations.js';
import './Login.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.js";

import { useNavigate } from "react-router-dom";




const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const nav= useNavigate();

  return (
    <div className="Login-wrapper">
      <div className="accounts">
        <div className="apple"><i className="bi bi-apple"></i></div>
        <div className="facebook"><i className="bi bi-facebook"></i></div>
        <div className="google"><i className="bi bi-google"></i></div>
      </div>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={SignUpSchema}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
    console.log("Logged in:", userCredential.user);
    nav('/dashboard'); // ✅ Navigate after success
  } catch (error) {
    console.error("Login error:", error.code, error.message);

    if (error.code === 'auth/user-not-found') {
      setErrors({ email: 'No user found with this email.' });
    } else if (error.code === 'auth/wrong-password') {
      setErrors({ password: 'Incorrect password.' });
    } else {
      alert("Login failed: " + error.message);
    }
  } finally {
    setSubmitting(false);
  }
}}
      >
        {() => (
          <Form>
            <p className="Login-option">or register with email</p>

            <div className="input">
              <div className="email-input">
                <p className="label">Email address</p>
                <Field name="email" type="text" className="custom-input" />
              </div>
              
            </div>
            <ErrorMessage name="email" component="div" className="error" />

            <div className="input">
              <div className="password-input">
                <p className="label">Password</p>
                <Field name="password" type={showPassword ? 'text' : 'password'} className="custom-input" />
              </div>
              <div className="input-icons">
               
                <i
                  className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} eye`}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              </div>
            </div>
            <ErrorMessage name="password" component="div" className="error" />

           

            <button className="submit" type="submit">Login to Dashboard</button>

            <div className="send-me">
              <input type="checkbox" id="subscribe" />
              <p>Remember me</p>
            </div>
          </Form>
        )}
      </Formik>

    
    </div>
  );
};

export default Login;
