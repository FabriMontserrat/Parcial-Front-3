import React from 'react';

const Card = ({ country, city }) => {
  return (
    <div className="card">
      <h2>Información ingresada:</h2>
      <p>País: {country}</p>
      <p>Ciudad: {city}</p>
    </div>
  );
};

export default Card;
