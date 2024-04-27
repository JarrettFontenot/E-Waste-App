import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <header>
      <h1>E-Waste</h1>
      <nav>
        <ul>
          {location.pathname === '/about' ? (
            <li><Link to="/">Home</Link></li>
          ) : (
            <li><Link to="/about">About</Link></li>
          )}
          <li><Link to="/register">Sign up</Link></li> 
          <li><a href="#">Log in</a></li>
          <li><a href="#">Profile</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
