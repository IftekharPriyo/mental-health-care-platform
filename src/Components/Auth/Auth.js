import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import './login.css';
import { handleGoogleSignIn, initializeLoginFrameWork } from './LoginManager';
const Auth = () => {
    const [cls, setCls] = useState('');
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    });
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    initializeLoginFrameWork();

    function googleSign() {
        console.log('test');
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res,true)
            })
    }
    const handleResponse = (res, redirect) =>{
        setUser(res);
        setLoggedInUser(res);
    }
    return (
        <div className={`start container ${cls}`} id="container">
            <div className='form-container sign-up-container'>
                <div className='form'>
                    <h1>Create Account</h1>
                    <div className='social-container'>
                        {/* <h1>test</h1> */}
                    </div>
                    {/* <span>or use your email for registration</span> */}
                    <input type="text" name="name" placeholder="Name"></input>
                    <input type="email" name="email" placeholder="Email"></input>
                    <input type="password" name="password" placeholder="Password"></input>
                    <button>SignUp</button>
                    <br/>
	                <button onClick={googleSign}>SignUp with GOOGLE</button>
                </div>
            </div>
            <div className='form-container sign-in-container'>
                <div className='form'>
                    <h1>Sign In</h1>
                    <div className='social-container'>
                        {/* <h1>test</h1> */} 
                    </div>
                    {/* <span>or use your account</span> */}
                    <input type="email" name="email" placeholder="Email"></input>
                    <input type="password" name="password" placeholder="Password"></input>
                    <span className='forgot'>Forgot your account</span>
                    <button className='signInButton'>Sign In</button>
                </div>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button class="ghost" id="signIn" onClick={()=>setCls('')}>Sign In</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your details and start journey with us</p>
                        <button class="ghost" id="signUp" onClick={()=>setCls('right-panel-active')}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;