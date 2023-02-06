import React from 'react';

function Guess({ guess }) {
  const row = guess || Array(5).fill({ letter: '', status: '' });
  return (
    <p className="guess">
      {row.map(({ letter, status }, i) => (
        <span key={i} className={`cell ${status}`}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
