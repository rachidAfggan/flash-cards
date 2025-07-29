import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      {/* On affiche le composant FlashCards */}
      <FlashCards />
    </div>
  );
}

// Tableau des questions et réponses
const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  // State qui garde l'id de la carte actuellement active (ouverte)
  const [activeCardId, setActiveCardId] = useState(null);

  // Fonction appelée lorsqu'on clique sur une carte
  function handleCardClick(cardId) {
    // Si on clique sur la même carte => on la referme (null)
    // Sinon => on ouvre la carte cliquée
    const isSameCard = cardId === activeCardId;
    setActiveCardId(isSameCard ? null : cardId);
  }

  return (
    <div className="flashcards">
      {/* On parcourt toutes les questions et on affiche une carte pour chacune */}
      {questions.map((card) => {
        // Vérifie si cette carte est active (ouverte)
        const isActive = activeCardId === card.id;

        return (
          <div
            key={card.id}
            className="flashcard"
            // Lorsqu'on clique sur la carte, on appelle handleCardClick
            onClick={() => handleCardClick(card.id)}
            // Changer la couleur de fond selon si la carte est active
            style={{ background: isActive ? "red" : "white" }}
          >
            {/* Si la carte est active => on montre la réponse, sinon la question */}
            {isActive ? card.answer : card.question}
          </div>
        );
      })}
    </div>
  );
}
