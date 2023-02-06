import React from 'react';

function GameOverBanner({ isWinner, answer, numberOfGuesses }) {
  return isWinner ? (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {' '}
          {`${numberOfGuesses} guess${
            numberOfGuesses === 1 ? '' : 'es'
          }`}
        </strong>
        .
      </p>
    </div>
  ) : (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

export default GameOverBanner;
