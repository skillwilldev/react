import { useState } from 'react';

function CoffeeMachine() {
  const [sugarCount, setSugarCount] = useState(0);

  const handleAddSugar = () => {
    setSugarCount(sugarCount => sugarCount + 1);
  };

  const handleRemoveSugar = () => {
    if (sugarCount > 0) {
      setSugarCount(sugarCount => sugarCount - 1);
    }
  };

  return (
    <div style={styles.container}>
      <h2>☕ ჭკვიანი ყავის აპარატი</h2>
      <p style={styles.text}>შაქრის რაოდენობა: {sugarCount} კოვზი</p>

      <div style={styles.buttonContainer}>
        <button onClick={handleRemoveSugar} style={styles.button}>
          - შაქარი
        </button>

        <button onClick={handleAddSugar} style={styles.button}>
          + შაქარი
        </button>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '20px',
    textAlign: 'center',
    border: '2px solid #ccc',
    borderRadius: '10px',
    maxWidth: '300px',
    margin: '20px auto',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9'
  },
  text: {
    fontSize: '18px',
    fontWeight: 'bold'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '15px'
  },
  button: {
    padding: '10px 15px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: '1px solid #333',
    backgroundColor: '#fff'
  }
}

export default CoffeeMachine;