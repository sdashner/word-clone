import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess/Guess';

function GuessResults({ guesses }) {
  const numOfGuesses = guesses.length;
  const results = [
    ...guesses,
    ...range(NUM_OF_GUESSES_ALLOWED - numOfGuesses).map((number) => ({
      range: '',
      id: number,
    })),
  ];

  return (
    <div className="guess-results">
      {results.map(({ guess, id }) => (
        <Guess key={id} guess={guess} />
      ))}
    </div>
  );
}

export default GuessResults;
