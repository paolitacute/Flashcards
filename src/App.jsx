import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const flipCard = () => {
    setIsCardFlipped(!isCardFlipped);
  };

  return (
    <main>
      <h1>Title of Flashcards</h1>
      <h2>Flashcard Count: </h2>
      <div className="flashcard-container">
        <div className={`flashcard ${isCardFlipped ? 'back-card' : 'front-card'}`} onClick={flipCard}>
          <div className="front-card">Question</div>
          <div className="back-card">Answer</div>
        </div>
      </div>
      <button>Next</button>
    </main>
  );
};

export default App
