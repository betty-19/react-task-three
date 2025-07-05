import React from "react";
import './Registered.css'
import registered from '../../assets/images/registered.png'
import { useNavigate } from "react-router-dom";

function Registered(){

    const nav = useNavigate();
    return(
        <div className="registered-wrapper">
            <div className="registered-content">
                <div className="img">
                    <img src={registered} alt="" />
                </div>
                
                <div className="registered">
                    <h1>You are successfully registered!</h1>
                    <button className="go-to-login" type="submit" onClick={()=>{
                nav('/');
              }}>
                Go to Login
              </button>
                </div>
                
            </div>

            
        </div>
    )
}
export default Registered