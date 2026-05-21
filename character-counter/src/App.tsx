import React, { useState } from 'react';

function App() {
  // 1. ვქმნით State-ს ტექსტის შესანახად
  const [text, setText] = useState('');

  // 2. ფუნქცია, რომელიც მუშაობს ყოველ ჯერზე, როცა მომხმარებელი რამეს ჩაწერს
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  // 3. ვითვლით სიმბოლოების რაოდენობას
  const characterCount = text.length;

  // 4. ბონუსი: ვამოწმებთ, აჭარბებს თუ არა რაოდენობა 20-ს
  const isOverLimit = characterCount > 20;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>"ჭკვიანი" ტექსტის ყუთი</h2>

      <textarea
        placeholder="ჩაწერეთ თქვენი პოსტი ან კომენტარი..."
        value={text}
        onChange={handleChange}
        style={styles.textarea}
      />

      <p style={{
        ...styles.counter,
        color: isOverLimit ? 'red' : '#333', // თუ 20-ს გასცდა, ფერი გახდება წითელი
        fontWeight: isOverLimit ? 'bold' : 'normal'
      }}>
        სიმბოლოების რაოდენობა: {characterCount}
      </p>


      {isOverLimit && (
        <span style={styles.warningText}>⚠️ სიმბოლოების რაოდენობა აჭარბებს ლიმიტს (20)!</span>
      )}
    </div>
  );
}

// მარტივი ვიზუალური სტილები (inline styles)
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: 'sans-serif',
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  textarea: {
    width: '100%',
    height: '100px',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    resize: 'vertical'
  },
  counter: {
    fontSize: '16px',
    marginTop: '10px',
    transition: 'color 0.3s ease' // ფერის რბილი გადასვლისთვის
  },
  warningText: {
    fontSize: '13px',
    color: 'red'
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px'

  }
};

export default App;