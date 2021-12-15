import React, { useState } from 'react';
import "./Login.css";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';



function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const signIn = e => {
e.preventDefault();

//firebase
}

const register = e => {
    e.preventDefault();

    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
        })
        .catch(auth => alert(error.message)) 

    
//firebase register
}

    return (
        <div className="login">
            <Link to="/">
            <img
                className="login__logo" alt="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
            </Link>

            <div className="login__container">
                <h1>Sign-In</h1>
                
                    <form>
                        <h5>E-mail</h5>
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                        <h5>Password</h5>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                        
                        <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
                    </form>

                    <p>
                        By signing-in you agree to AMAZON ROBER CLONE Conditions of use & sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>

                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>


            </div>
        </div>
    )
}

export default Login
