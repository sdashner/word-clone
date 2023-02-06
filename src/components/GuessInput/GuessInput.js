import React, { useState } from 'react';

const DEFAULT_GUESS = '';

function GuessInput({ addGuess }) {
  const [guess, setGuess] = useState(DEFAULT_GUESS);

  const handleSubmit = (e) => {
    e.preventDefault();
    addGuess(guess);
    setGuess(DEFAULT_GUESS);
  };

  const handleChange = (e) => setGuess(e.target.value.toUpperCase());

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[A-Z]{5,5}"
        value={guess}
        onChange={handleChange}
      />
    </form>
  );
}

export default GuessInput;
