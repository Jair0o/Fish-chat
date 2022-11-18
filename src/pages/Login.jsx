import React from "react";
import Add from "../img/addAvatar.png"

export const Login = () => {
  return (
    <div className="formContainer">
         <div className="formWrapper">
            <span className="logo">Fish Chat</span>
            <span className="title">Register</span>
            <form>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <button>Sign In</button>
            </form>
            <p>Not with Fish Chat? Register</p>
         </div>
    </div>
  );
};

export default Login;