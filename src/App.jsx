import { useState } from 'react'
import './App.css'

const flashcards = [

  { question: "Hello / Good morning", answer: "Bonjour", difficulty: "easy" },
  { question: "Thank you very much", answer: "Merci beaucoup", difficulty: "easy" },
  { question: "Please", answer: "S'il vous plaît", difficulty: "easy" },
  { question: "The cat", answer: "Le chat", difficulty: "easy" },
  { question: "Goodbye", answer: "Au revoir", difficulty: "easy" },

  { question: "Where is the bathroom?", answer: "Où sont les toilettes ?", difficulty: "medium" },
  { question: "I would like a coffee", answer: "Je voudrais un café", difficulty: "medium" },
  { question: "What time is it?", answer: "Quelle heure est-il ?", difficulty: "medium" },
  { question: "To eat", answer: "Manger", difficulty: "medium" },
  { question: "My name is...", answer: "Je m'appelle...", difficulty: "medium" },

  { question: "It's raining cats and dogs (Idiom)", answer: "Il pleut des cordes", difficulty: "hard" },
  { question: "A masterpiece", answer: "Un chef-d'œuvre", difficulty: "hard" },
  { question: "I don't think it's a good idea (Subjunctive)", answer: "Je ne pense pas que ce soit une bonne idée", difficulty: "hard" },
  { question: "I had already eaten when he arrived (Plus-que-parfait)", answer: "J'avais déjà mangé quand il est arrivé", difficulty: "hard" },
  { question: "To be overwhelmed", answer: "Être débordé(e)", difficulty: "hard" }
];

function App() {

  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const flipCard = () => {
    setIsCardFlipped(!isCardFlipped);
  };

  const nextCard = () => {
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    setCurrentCardIndex(randomIndex);
    
    setIsCardFlipped(false);
  };

  return (
    <main>
      <h1>Voyage en Français</h1>
      <h2>Test your French knowledge! Flip the cards to practice vocabulary, translations, and common phrases across different difficulty levels.</h2>
      <h3>Flashcard Count: {flashcards.length}</h3>
      <div className="flashcard-container" onClick={flipCard}>
        <div className={`flashcard ${isCardFlipped ? 'flipped' : ''}`}>
          
          {/* Front of the card */}
          <div className={`card-face front-card ${flashcards[currentCardIndex].difficulty}`}>
            {flashcards[currentCardIndex].question}
          </div>

          {/* Back of the card */}
          <div className={`card-face back-card ${flashcards[currentCardIndex].difficulty}`}>
            {flashcards[currentCardIndex].answer}
          </div>

        </div>
      </div>
      <button onClick={nextCard}>Next ➔</button>
    </main>
  );
};

export default App
