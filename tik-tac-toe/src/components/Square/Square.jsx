import './Square.css';

function Square({ value, onClick }) {
    const className = `square ${value === 'X' ? 'x-style' : value === 'O' ? 'o-style' : ''}`;

    return (
        <button className={className} onClick={onClick}>
            {value}
        </button>
    );
}

export default Square;