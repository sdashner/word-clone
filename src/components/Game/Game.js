import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import GameOverBanner from '../GameOverBanner/GameOverBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameState, setGameState] = useState('inProgress');

  const addGuess = (guess) => {
    const nextGuesses = [
      ...guesses,
      { guess: checkGuess(guess, answer), id: Math.random() },
    ];

    setGuesses(nextGuesses);
    if (guess === answer) {
      setGameState('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState('lost');
    }
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput disabled={gameState !== 'inProgress'} addGuess={addGuess} />
      {gameState !== 'inProgress' && (
        <GameOverBanner
          answer={answer}
          numberOfGuesses={guesses.length}
          isWinner={gameState}
        />
      )}
    </>
  );
}

export default Game;
