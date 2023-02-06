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
  const [endState, setEndState] = useState({
    gameOver: false,
    isWinner: false,
  });

  const addGuess = (guess) => {
    const hasWon = guess === answer;
    const usedAllGuesses =
      guesses.length + 1 === NUM_OF_GUESSES_ALLOWED;
      
    setGuesses([
      ...guesses,
      { guess: checkGuess(guess, answer), id: Math.random() },
    ]);

    if (hasWon || usedAllGuesses) {
      setEndState({ gameOver: true, isWinner: hasWon });
    }
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput disabled={endState.gameOver} addGuess={addGuess} />
      {endState.gameOver && (
        <GameOverBanner
          answer={answer}
          numberOfGuesses={guesses.length}
          isWinner={endState.isWinner}
        />
      )}
    </>
  );
}

export default Game;
