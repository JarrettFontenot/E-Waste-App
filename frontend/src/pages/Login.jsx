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
        
        try {
            const response = await axios.post("http://localhost:3001/login", { email, password});
    
            if (response.data === "exist") {
                alert("Success");
                history("/");
            } else if (response.data === "notexist") {
                alert("User is not logged in")
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong");
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
