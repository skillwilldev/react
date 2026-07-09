import Square from '../Square/Square';
import './Board.css';

function Board({ squares, onSquareClick }) {
    return (
        <div className="board">
            {squares.map((squareValue, index) => (
                <Square
                    key={index}
                    value={squareValue}
                    onClick={() => onSquareClick(index)}
                />
            ))}
        </div>
    );
}

export default Board;