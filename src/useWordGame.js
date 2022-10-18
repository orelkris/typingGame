import { useState, useEffect, useRef } from 'react';

export default function useWordGame() {
  const [gameData, setGameData] = useState({
    text: '',
    timer: 10,
    start: false,
    wordCount: 0,
  });

  const gameAreaRef = useRef(null);

  useEffect(() => {
    if (gameData.start && gameData.timer > 0) {
      setTimeout(() => {
        setGameData((prevState) => {
          return {
            ...prevState,
            timer: prevState.timer - 1,
          };
        });
      }, 1000);
    } else if (gameData.timer === 0) {
      const finalWordCount = calculateWordCount(gameData.text);

      setGameData((prevState) => {
        return {
          ...prevState,
          start: false,
          timer: 10,
          wordCount: finalWordCount,
        };
      });
    }
  }, [gameData.timer, gameData.start]);

  const updateText = (event) => {
    const { name, value } = event.target;
    setGameData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const calculateWordCount = (text) => {
    if (text === '') return 0;

    const wordsArray = text.trim().split(/\s+/);
    console.log(wordsArray.length);
    return wordsArray.length;
  };

  const startGame = () => {
    setGameArea();
    setGameData((prevState) => {
      return {
        ...prevState,
        start: true,
      };
    });
  };

  function setGameArea() {
    setGameData((prevState) => {
      return {
        ...prevState,
        text: '',
      };
    });
    gameAreaRef.current.focus();
  }

  return [gameData, gameAreaRef, updateText, startGame];
}
