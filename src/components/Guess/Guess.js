import React from 'react';

function Guess({ guess }) {
  const row = guess ? guess.split('') : Array(5).fill(' ');
  return (
    <p className="guess">
      {row.map((char, i) => (
        <span key={i} className="cell">
          {char}
        </span>
      ))}
    </p>
  );
}

export default Guess;
