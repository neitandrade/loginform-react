import React from 'react'
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
    return (
    <div className="container">
        <form action="">
            <h1>Login</h1>
            <div className="inputBox">
                <input type="text" placeholder='Set your name here...' required />
                <FaUser className='icon' />
            </div>
            <div className="inputBox">
                <input type="password" placeholder='Set your password here...' required />
                <FaLock className='icon' />
            </div>

            <div className="rememberForgot">
                <label><input type="checkbox" />Remember Me</label>
                <a href="#">Forgot Password ?</a>
            </div>

            <button type='submit'>Login</button>

            <div className="registerLink">
                <p>Dont have a account ? <a href='#'>Register Here!</a></p>
            </div>

        </form>
    </div>

    );
};

export default LoginForm