import React from 'react';
import './App.css';
import useWordGame from './useWordGame';

function App() {
  const [gameData, gameAreaRef, updateText, startGame] = useWordGame();

  return (
    <div className="App">
      <div className="game__container">
        <h1 className="game__title">How fast do you type?</h1>
        <textarea
          ref={gameAreaRef}
          id="game__area"
          className="game__area"
          name="text"
          value={gameData.text}
          onChange={updateText}
        />
        <h4 className="game__timer">Time remaining: {gameData.timer}</h4>
        <div className="game__start-container">
          <button
            onClick={startGame}
            className="game__start-button"
            disabled={gameData.start}
          >
            Start
          </button>
        </div>
        <h4 className="game__wordcount">Word Count: {gameData.wordCount}</h4>
      </div>
    </div>
  );
}

export default App;
