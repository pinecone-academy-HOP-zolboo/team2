import "./login.css";
import React, { useState } from 'react'

const Login = () => {
  return (

    <div className="container">
        <div className="center">
        <h1>Login</h1>
        <form method="post">
            <div className="txt-field">
                <input></input>
                <span></span>
                <label>Username</label>
            </div>
            <div className="txt-field">
                <input></input>
                <span></span>
                <label>Password</label>
            </div>
            <div className="pass">Forgot password</div>
            <button>Login</button>
            <div className="signup-link">
                Not a member? <a href="#">Signup</a>
            </div>
        </form>
    </div>
    </div>
    
  )
}

export default Login;