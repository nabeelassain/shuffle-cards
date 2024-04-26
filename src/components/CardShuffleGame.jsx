import React, {useState, useEffect} from "react";
import CardContainer from './CardContainer'
import '../styles/CardShuffleGame.css'

const CardShuffleGame = () => {
  const [deck, setDeck] = useState([]);
  const [drawnCards, setDrawnCards] = useState([]);
  const [message, setMessage] = useState('');

  const createDeck = () => {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'];
    const newDeck = [];
    for (let suit of suits) {
      for (let rank of ranks) {
        newDeck.push({ suit, rank });
      }
    }
    return newDeck;
  };

  const shuffleDeck = (deck) => {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  };

  const drawCards = () => {
    if (deck.length < 5) {
      setMessage('No more cards left');
      return;
    }
    const drawn = deck.slice(0, 5);
    setDrawnCards([...drawnCards, drawn]);
    setDeck(deck.slice(5));
  };

  useEffect(() => {
    setDeck(shuffleDeck(createDeck()));
  }, []);

  return (
    <div className="container">
      <h1>Card Shuffle Game</h1>
      <button className="draw-button" onClick={drawCards}>Draw</button>
      <CardContainer cards={drawnCards.flat()} />
      {message && <p>{message}</p>}
    </div>
  );
};

export default CardShuffleGame;
