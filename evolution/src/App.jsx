import { useState } from 'react';
function App() {
  const [score, setScore] = useState(0);
  const increaseScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const resetGame = () => {
    setScore(0);
  };

  let alpacaStatus = "";
  let alpacaEmoji = "";

  if (score < 10) {
    alpacaStatus = "პატარა საყვარელი ალპაკა";
    alpacaEmoji = "👶";
  } else if (score >= 10 && score <= 25) {
    alpacaStatus = "მოზარდი და ცოტა ბრაზიანი ალპაკა";
    alpacaEmoji = "🦙💢";
  } else if (score > 25) {
    alpacaStatus = "ლეგენდარული ალპაკა-ნინძა!";
    alpacaEmoji = "😇";
  }

  const isWon = score >= 50;

  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif', marginTop: '50px' }}>
      <h1>ალპაკას ევოლუცია 🎮</h1>
      <h2>შენი ქულა: {score}</h2>
      <div style={{ fontSize: '70px', margin: '20px 0' }}>
        {alpacaEmoji}
      </div>
      <h3 style={{ color: '#555' }}>{alpacaStatus}</h3>

      <hr style={{ width: '50%', margin: '30px auto', borderColor: '#eee' }} />

      {isWon && (
        <h2 style={{ color: '#4CAF50', marginBottom: '20px' }}>
          გილოცავ! შენ მოიგე თამაში! 🏆
        </h2>
      )}

      <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
        <button
          onClick={increaseScore}
          disabled={isWon}
          style={{
            padding: '12px 24px',
            fontSize: '18px',
            cursor: isWon ? 'not-allowed' : 'pointer',
            backgroundColor: isWon ? '#ccc' : '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '8px'
          }}
        >
          მოეფერე ალპაკასო 🦙
        </button>

        <button
          onClick={resetGame}
          style={{
            padding: '12px 24px',
            fontSize: '18px',
            cursor: 'pointer',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '8px'
          }}
        >
          თავიდან დაწყება 🔄
        </button>
      </div>
    </div>
  );
}

export default App;