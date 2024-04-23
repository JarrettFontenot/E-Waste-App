import React from "react";
import '../styles.css';

function Header() {
    return (
        <header>
        <h1>E-Waste</h1>
        <nav>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Profile</a></li>
          </ul>
        </nav>
        </header>
    )
}

export default Header;