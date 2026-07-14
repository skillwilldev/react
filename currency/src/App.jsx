import { useState, useEffect } from "react";
import './App.css';

const RATES = {
  USD: 2.5,
  EUR: 2.8,
};

function App() {
  const [amountGEL, setAmountGEL] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("USD");

  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem("currency_history");
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  useEffect(() => {
    localStorage.setItem("currency_history", JSON.stringify(history));
  }, [history]);

  const convertAmount = () => {
    const gel = parseFloat(amountGEL);
    if (isNaN(gel) || gel <= 0) return "0.00";
    return (gel / RATES[targetCurrency]).toFixed(2);
  };

  const convertedValue = convertAmount();

  const handleSaveToHistory = () => {
    const gel = parseFloat(amountGEL);
    if (isNaN(gel) || gel <= 0) {
      alert("გთხოვთ, შეიყვანოთ სწორი თანხა!");
      return;
    }

    const record = `${gel} GEL = ${convertedValue} ${targetCurrency}`;
    setHistory((prevHistory) => [record, ...prevHistory]);
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="converter-container">
      <h2 className="converter-title">ვალუტის კონვერტერი</h2>

      <div className="converter-card">
        <div className="input-group">
          <label className="input-label">თანხა (GEL):</label>
          <input
            type="number"
            placeholder="მაგ: 100"
            value={amountGEL}
            onChange={(e) => setAmountGEL(e.target.value)}
            className="converter-input"
          />
        </div>

        <div className="input-group">
          <label className="input-label">გადაიყვანე:</label>
          <select
            value={targetCurrency}
            onChange={(e) => setTargetCurrency(e.target.value)}
            className="converter-select"
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
          </select>
        </div>

        {/* შედეგი */}
        <div className="result-container">
          <p className="result-text">
            შედეგი: <strong className="result-value">{convertedValue} {targetCurrency}</strong>
          </p>
        </div>

        <button onClick={handleSaveToHistory} className="save-button">
          ისტორიაში შენახვა
        </button>
      </div>

      <div className="history-card">
        <div className="history-header">
          <h3>კონვერტაციის ისტორია</h3>
          {history.length > 0 && (
            <button onClick={handleClearHistory} className="clear-button">
              გასუფთავება
            </button>
          )}
        </div>

        {history.length === 0 ? (
          <p className="empty-text">ისტორია ცარიელია</p>
        ) : (
          <ul className="history-list">
            {history.map((item, index) => (
              <li key={index} className="history-item">
                <span>{item}</span>
                <span className="success-tag">✓ შენახულია</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;