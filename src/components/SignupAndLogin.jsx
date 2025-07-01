import React,{useState} from "react";
import Login from "./Login";
import Signup from "./Signup";
import './SignupAndLogin.css'

const SignupAndLogin = () =>{

    const [showLoginPage,setShowLoginPage] = useState(false);
    const [showSignupPage,setShowSignupPage] = useState(true);

    const toggleSignUp = ()=>{
        setShowSignupPage(true);
        setShowLoginPage(false);
    }
    const toggleLogin = ()=>{
       setShowLoginPage(true);
        setShowSignupPage(false);
        
    }

    return(
        <div className="wrapper">
            <div className="signup-and-login-wrapper">
            <div className="register-login">
                <div className="register-login-links">
                    <p className="register" onClick={toggleSignUp}>Register</p>
                    <p className="login" onClick={toggleLogin}>Login</p>
                </div>
                <div className="close-icon">
                       <i class="bi bi-x"></i>

                </div> </div>
                {showSignupPage &&<Signup/>} 
               
                {showLoginPage && <Login/>}
                
           

        </div>
        </div>
        
    )
}

export default SignupAndLogin