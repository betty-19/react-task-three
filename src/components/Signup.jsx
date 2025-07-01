import React,{useState} from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SignUpSchema } from '../utils/validations.js';
import './Signup.css'

const Signup = () => {

const [showPassword,setShowPassword] = useState(false);

  return (
    <div className="signup-wrapper">
      <div className="accounts">
        <div className="apple">
          <i class="bi bi-apple"></i>
        </div>
        <div className="facebook">
          <i class="bi bi-facebook"></i>
        </div>
        <div className="google">
          <i class="bi bi-google"></i>
        </div>
      </div>
      
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          console.log(values); // you can handle form submission here
        }}
      >
        {() => (
          <Form> 
            <p className="signup-option">or register with email</p>
            <div className="input">
                <div className="email-input">
                    <p className="label">Email adress</p>
                    <Field name="email" type="text" /> 
                </div>
                <div className="input-icons">
                    <i className="bi bi-check check"></i> 
                </div>
               
                      
            </div>
            <ErrorMessage name="email" component="div" className="error" />
            <div className="input">
                <div className="password-input">
                    <p className="label">Password</p>
                    <Field name="password" type="password" />
                </div>
              
              <div className="input-icons">
                <i className="bi bi-check check"></i>
                {showPassword ? (<i class="bi bi-eye-slash eye" onClick={()=>{
setShowPassword(!showPassword)
              }}></i>):
                (<i class="bi bi-eye eye" onClick={()=>{
setShowPassword(!showPassword)
              }}></i>)  
               }  
                       
            
              </div>
              
            </div>
            <ErrorMessage name="password" component="div" className="error" />
            <p className="characters">8+ characters</p>
            <button className="submit" type="submit">Create account</button>
            <div className="send-me">
                <input type="checkbox" />
                <p>Send me news and promotions</p>
            </div>
            <p className="terms-conditions">By continuing I agree with the <a>Terms & Conditions Privacy Policy</a></p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
