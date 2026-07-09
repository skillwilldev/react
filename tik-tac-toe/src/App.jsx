import { useState } from 'react';
import Board from './components/Board/Board';
import './App.css';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [scores, setScores] = useState({ xWins: 0, oWins: 0, draws: 0 });

  const calculateWinner = (squaresArray) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squaresArray[a] && squaresArray[a] === squaresArray[b] && squaresArray[a] === squaresArray[c]) {
        return squaresArray[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(square => square !== null);

  const handleClick = (index) => {
    if (squares[index] || winner) return;

    const nextSquares = [...squares];
    const currentPlayer = xIsNext ? 'X' : 'O';
    nextSquares[index] = currentPlayer;

    const nextWinner = calculateWinner(nextSquares);
    const nextIsDraw = !nextWinner && nextSquares.every(square => square !== null);

    if (nextWinner === 'X') {
      setScores(prev => ({ ...prev, xWins: prev.xWins + 1 }));
    } else if (nextWinner === 'O') {
      setScores(prev => ({ ...prev, oWins: prev.oWins + 1 }));
    } else if (nextIsDraw) {
      setScores(prev => ({ ...prev, draws: prev.draws + 1 }));
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  let status = winner
    ? `გამარჯვებული: ${winner}`
    : isDraw
      ? 'მატჩი დასრულდა ფრით!'
      : `შემდეგი სვლა: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="game-container">
      <h1>Tic-Tac-Toe</h1>
      <div className={`status-display ${winner ? 'winner-announcement' : ''}`}>
        {status}
      </div>

      <div className="board-wrapper">
        <Board squares={squares} onSquareClick={handleClick} />

        <div className="score-counter">
          <div>X: {scores.xWins}</div>
          <div>O: {scores.oWins}</div>
          <div>ფრე: {scores.draws}</div>
        </div>
      </div>

      <button className="restart-btn" onClick={handleRestart}>
        თავიდან დაწყება
      </button>
    </div>
  );
}

export default App;