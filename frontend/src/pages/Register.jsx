import '../styles.css';
import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

function Register () {

    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [name, setName]= useState('')

    const navigation = useNavigate();

    async function submit(e) {
        e.preventDefault();
    
        try {
            const response = await axios.post("http://localhost:3001/register", { email, password, name });
    
            if (response.data === "User already exists") {
                alert("User already exists");
            } else if (response.data === "User created successfully") {
                console.log("User created successfully");
                navigation("/");
                alert("Success");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong");
        }
    }
    
    

    /*
    useEffect(() => {
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirm_password');

        const handlePasswordMatch = () => {
            if (passwordInput.value !== confirmPasswordInput.value) {
                confirmPasswordInput.setCustomValidity("Passwords do not match");
            } else {
                confirmPasswordInput.setCustomValidity('');
            }
        };

        confirmPasswordInput.addEventListener('input', handlePasswordMatch);

        return () => {
            confirmPasswordInput.removeEventListener('input', handlePasswordMatch);
        };
    }, []);
    */

    return (
    <div className="register-page">
        <div className="reg-container">
            <div className="form-container">
                <form action="POST">
                    <input type="text" onChange={(e)=>{setName(e.target.value)}} name="name" placeholder="Your Name" required />
                    <input type="email" onChange={(e)=>{setEmail(e.target.value)}} name="email" placeholder="Your Email" required />
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}}name="password" placeholder="Password" required />
                    <input type="password" name="confirm_password" id="confirm_password" placeholder="Confirm Password" required />
                    <input type="submit" onClick={submit} />
                </form>
            </div>
        </div>
    </div>
    );
};

export default Register;
