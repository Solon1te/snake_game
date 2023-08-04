import React, {useState, useRef, useEffect} from "react";
import { useInterval} from './useInterval'
import {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS 
} from './constants'
import { keyboard } from "@testing-library/user-event/dist/keyboard";

const App = () => {
  const canvasRef = useRef()
  const [snake, setSnake] = useState(SNAKE_START);
  const [apple, setApple] = useState(APPLE_START);
  const [dir, setDir] = useState([0, -1]);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameover] = useState(false);

  useInterval(() => gameLoop(), speed);

  const endGame = () => {
    setSpeed(null);
    setGameover(true)
  };

  const moveSnake = (keyCode) => {
    keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode]);
  };

  const createApple = () => {
    apple.map((_a, i) => Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE)));
  };

  const checkCollision = (piece, snk = snake) => {
    if (
      piece[0] * SCALE >= CANVAS_SIZE[0] ||
      piece[0] < 0 ||
      piece[1] * SCALE >= CANVAS_SIZE[1] ||
      piece[1] < 0
    )
    return true;

    for (const segment of snk) {
      if (piece[0] === segment[0] && piece[1] === segment[1]) return true;
    }
    return false  
  };

  const startGame = () => {

  };


  const checkAppleCollision = () => {

  };

  const gameLoop = () => {

  };

useEffect(() => {
  const context = canvasRef.currnet.getContext('2d');
  context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
  context.clearReact(0, 0, CANVAS_SIZE[0], CANVAS_SIZE[1]);
  context.fillStyle = 'pink';
  snake.forEach([x, y]) => context.fillRect(x, y, 1, 1);
  context.fillStyle = 'lightblue';
  context.fillRect(apple[0], apple[1], 1, 1);
  }, [snake, apple, gameOver])


    return(
      <div role="button" tabIndex='0' onKeyDown={e => moveSnake(e)}>
        <canvas style={{border: '1px solid black'}}
        ref={canvasRef}
        width={`${CANVAS_SIZE[0]}px`}
        height={`${CANVAS_SIZE[1]}px`}
        />
        {gameOver && <div>GAME OVER!</div>}
        <button onClick={startGame}>Start Game</button>
      </div>
  )
}

export default App;