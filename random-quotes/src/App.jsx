import { useState } from 'react';

const QUOTES = [
  { text: "ერთადერთი გზა დიდი საქმის გასაკეთებლად არის ის, რომ გიყვარდეს, რასაც აკეთებ.", author: "სტივ ჯობსი" },
  { text: "ცხოვრება არის ის, რაც ხდება მაშინ, როცა შენ სხვა გეგმებს აწყობ.", author: "ჯონ ლენონი" },
  { text: "წარმატება საბოლოო არ არის, მარცხი ფატალური არ არის; მთავარია გაგრძელების გამბედაობა.", author: "უინსტონ ჩერჩილი" },
  { text: "შეუძლებელი მხოლოდ მანამ არსებობს, სანამ ვინმე მას შეასრულებს.", author: "ნელსონ მანდელა" }
];

function App() {

  const [currentQuote, setCurrentQuote] = useState(() => {
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    return QUOTES[randomIndex];
  });


  const changeQuote = () => {
    setCurrentQuote((prevQuote) => {
      const currentIndex = QUOTES.indexOf(prevQuote);
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * QUOTES.length);
      } while (nextIndex === currentIndex);
      return QUOTES[nextIndex];
    });
  };

  return (
    <div style={{ padding: '30px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h2>💬 დღის ციტატა</h2>

      <div style={{ margin: '20px 0', padding: '20px', border: '1px dashed #aaa', fontStyle: 'italic' }}>
        <p style={{ fontSize: '20px' }}>"{currentQuote.text}"</p>
        <p style={{ textAlign: 'right', fontWeight: 'bold' }}>— {currentQuote.author}</p>
      </div>

      <button onClick={changeQuote} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        შემდეგი ციტატა ➡️
      </button>
    </div>
  );
}

export default App;