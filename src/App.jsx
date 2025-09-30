import React, { useState, useEffect } from 'react';
import Card from './Card';
import './App.css';

const cardData = [
  { question: "What is React?", answer: "A JavaScript library for building user interfaces." },
  { question: "What is a component?", answer: "A reusable, self-contained piece of UI." },
  { question: "What is a hook?", answer: "A function that lets you use state and other React features in function components." },
  { question: "What does useState() do?", answer: "It declares a state variable." },
  { question: "What is JSX?", answer: "A syntax extension for JavaScript." }
];

const shuffleArray = (array) => {
  let newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

function App() {
  const [shuffledCards, setShuffledCards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    setShuffledCards(shuffleArray(cardData));
  }, []);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % shuffledCards.length);
  };

  if (shuffledCards.length === 0) {
    return <div>Loading...</div>;
  }

  const currentCard = shuffledCards[currentCardIndex];

  return (
    <div className="App">
      <header className="app-header">
        <h1>React Flashcards</h1>
        <p>A simple app to help you learn some React basics!</p>
        <p>Total cards: {cardData.length}</p>
      </header>
      <main className="card-container">
        <Card question={currentCard.question} answer={currentCard.answer} />
      </main>
      <footer className="app-footer">
        <button className="next-button" onClick={handleNextCard}>Next Card</button>
      </footer>
    </div>
  );
}

export default App;