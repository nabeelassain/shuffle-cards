import React from 'react';
import Card from './Card';
import '../styles/CardShuffleGame.css';

const CardContainer = ({ cards }) => {
  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    console.log(chunkedArr);
    return chunkedArr;
  };

  const chunkedCards = chunkArray(cards, 5);

  return (
    <div className="card-container">
      {chunkedCards.map((row, rowIndex) => (
        <div key={rowIndex}>
          <span className="card-row">
            {row.map((card, index) => (
              <Card key={index} card={card} />
            ))}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
