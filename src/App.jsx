import React, { useState } from 'react';
import Card from './Card';
import './index.css';

const App = () => {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (country.trim().length < 3 || country.trim()[0] === ' ' || city.length < 6) {
      setErrorMessage('Por favor chequea que la información sea correcta');
      setShowCard(false);
    } else {
      setErrorMessage('');
      setShowCard(true);
    }
  };

  return (
    <div className="app">
      <h1>De donde sos ??? </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>País:</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div>
          <label>Ciudad:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {errorMessage && <p className="error">{errorMessage}</p>}
      {showCard && <Card country={country} city={city} />}
    </div>
  );
};

export default App;
