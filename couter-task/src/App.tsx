import React, { useState } from 'react';
import './App.css';

const TextResizer: React.FC = () => {
  const [fontSize, setFontSize] = useState<number>(16);

  const increaseFont = () => {
    setFontSize(prevSize => Math.min(40, prevSize + 2));
  };

  const decreaseFont = () => {
    setFontSize(prevSize => Math.max(12, prevSize - 2));
  };

  const handleReset = () => {
    setFontSize(16);
  };

  return (
    <div className='container'>
      <div className="container__inner">
        <h2>ტექსტის ზომის შემცვლელი</h2>

        {/* ღილაკების პანელი */}
        <div style={{ marginBottom: '20px' }}>
          <button onClick={increaseFont} style={buttonStyle}>A+</button>
          <button onClick={decreaseFont} style={buttonStyle}>A-</button>
          <button onClick={handleReset} style={{ ...buttonStyle, backgroundColor: '#f44336', color: 'white' }}>Reset</button>
        </div>

        {/* მიმდინარე ზომის ინდიკატორი (სურვილისამებრ) */}
        <p style={{ color: '#666' }}>მიმდინარე ზომა: {fontSize}px</p>

        <hr style={{ margin: '20px 0', borderColor: '#eee' }} />

        {/* დინამიური ტექსტი, რომლის ზომაც იცვლება სტეიტის მიხედვით */}
        <p style={{ fontSize: `${fontSize}px`, transition: 'font-size 0.2s ease' }}>
          ეს არის სატესტო ტექსტი. შეცვალე მისი ზომა ზემოთ მოცემული ღილაკების საშუალებით!
        </p>
      </div>
    </div>
  );
};

// ღილაკების საბაზისო სტილები უკეთესი ვიზუალისთვის
const buttonStyle: React.CSSProperties = {
  padding: '10px 20px',
  margin: '0 5px',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '5px',
  border: '1px solid #ccc',
  backgroundColor: '#f0f0f0'
};

export default TextResizer;