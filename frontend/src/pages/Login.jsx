import React from 'react';
import '../styles.css';
import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

function Login() {
    const history = useNavigate();
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')

    async function submit (e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:3001/login",{
                email, password
            })
            .then(res=> {
                if (res.data="exist"){
                    history("/home")

                }
                else if (res.data="notexist"){
                    alert("User is not logged in")

                }
            })
            .catch(e=>{
                alert("wrong details")
                consloe.log(e);
            })

        }
        catch(e){
            console.log(e);


        }

    }

    return (
        <div className="container">
            <div className="form-container">
                <h2>Login</h2>
                <form action="POST">
                    <input type="email" onChange={(e)=>{setEmail(e.target.value)}} name="email" placeholder="Your Email" required />
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}}name="password" placeholder="Password" required />
                    <input type="submit" onClick={submit} />
                </form>
                <br/>
                <p>Don't have an account? <a href="Register">Register</a></p>
            </div>
        </div>
    );
};

export default Login;
