import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import AboutUs from './pages/AboutUsPage';
import Home from './pages/HomePage';
import Register from './pages/Register';
import Results from './pages/Results';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/results" element={<Results />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
