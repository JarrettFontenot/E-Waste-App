import React from "react";
import { useLocation } from "react-router-dom";

function Results() {
  const location = useLocation();
  const recycleCenters = location.state.recycleCenters || [];

  return (
    <div className='Results-Page'>
      <h1>Recycle centers near you!</h1>
      {recycleCenters.length > 0 ? (
        <ul>
          {recycleCenters.map((center, index) => (
            <li key={index}>
              <div className='Center'>
                <p>Name: {center.name}</p>
                <p>Location: {center.location}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recycle centers found.</p>
      )}
    </div>
  );
}

export default Results;