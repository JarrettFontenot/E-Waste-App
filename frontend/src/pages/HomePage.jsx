import React from 'react';
import '../styles.css';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';


function Home() {
  return (
    <div>
      <Header />
      <SearchBar />
      <div className="backgroundImage"></div>
      <div className="secondPart">
        <div className="secondBox">
          <h1>Test text!</h1>
          <p>Kitty wants out!</p>
        </div>
        <div className="secondImage"></div>
      </div>
    </div>
  );
}

export default Home;