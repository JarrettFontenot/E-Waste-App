import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = async () => {
    if (city.trim() !== "") {
      try {
        const response = await fetch(`http://localhost:3001/results/${encodeURIComponent(city)}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        navigate('/results', { state: { recycleCenters: data.recycleCenters } });
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    }
  };

  return (
    <div className="search-container">
      <h1>Welcome to the website!</h1>
      <p>Search for recycle centers near you!</p>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Locate Places!"
          value={city}
          onChange={handleInputChange}
        ></input>
        <button type="submit" className="search-button" onClick={handleSearch}>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
