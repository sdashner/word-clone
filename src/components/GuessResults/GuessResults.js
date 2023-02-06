import React from 'react';

function GuessResults({ guesses }) {
  return guesses.map(({ guess, id }) => <p key={id}>{guess}</p>);
}

export default GuessResults;
