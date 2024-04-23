import React, { useEffect } from 'react';
import '../styles.css';

const Register = () => {
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
    return (
    <div className="register-page">
        <div className="reg-container">
            <div className="form-container">
                <form action="#" method="post">
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <input type="password" name="password" id="password" placeholder="Password" required />
                    <input type="password" name="confirm_password" id="confirm_password" placeholder="Confirm Password" required />
                    <input type="submit" value="Register" />
                </form>
            </div>
        </div>
    </div>
    );
};

export default Register;
