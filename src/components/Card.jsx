import React from 'react';
import '../styles/CardShuffleGame.css';

const Card = ({ card }) => {
  return (
    <div className="card">
      <p>{card.rank}</p>
      <p>{card.suit}</p>
    </div>
  );
};

export default Card;
