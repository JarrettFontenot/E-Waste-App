import React from "react";
import '../styles.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
        <h1>E-Waste</h1>
        <nav>
          <ul>
          <li><Link to="/about">About</Link></li> 
            <li><Link to="/register">Sign up</Link></li> 
            <li><a href="#">Log in</a></li>
            <li><a href="#">Profile</a></li>
          </ul>
        </nav>
        </header>
    )
}

export default Header;