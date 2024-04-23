import React from "react";
import '../styles.css';

function SearchBar() {
    return (
        <div className='search-container'>
        <h1>Welcome to the website!</h1>
        <p>Search for recycle centers near you!</p>
        <div class="search-bar">
          <input type="text" class="search-input" placeholder="Locate Places!"></input>
          <button type="submit" class="search-button"><i class="fas fa-search"></i></button>
        </div>        
      </div>
    )
}

export default SearchBar;