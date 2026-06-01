import { useState, useEffect } from "react";
import './App.css';

export default function App() {
  // ბაგი 1 და 2: დაემატა const და გასწორდა LocalStorage-ის ქი (react_wallet)
  const [wallet, setWallet] = useState(() => {
    const saved = localStorage.getItem('react_wallet');
    return saved ? JSON.parse(saved) : [];
  });

  // ბაგი 4: გასწორდა სიტყვა expiry-ს სპელინგი საწყის სტეიტში
  const [formData, setformData] = useState({
    type: 'visa',
    holder: '',
    number: '',
    expiry: ''
  });

  // ბაგი 2: გასწორდა ქი, რათა ემთხვეოდეს ზედა ფუნქციას (react_wallet)
  useEffect(() => {
    localStorage.setItem('react_wallet', JSON.stringify(wallet));
  }, [wallet]);

  // ინპუტების ცვლილების დამჭერი ფუნქცია
  const handleChange = (e) => {
    let { name, value } = e.target;

    // ბონუსი 1: ბარათის ნომრის ავტომატური ფორმატირება (ყოველი 4 ციფრის მერე Space)
    if (name === "number") {
      value = value.replace(/\D/g, "") // მხოლოდ ციფრები
        .replace(/(.{4})/g, "$1 ") // ყოველ 4 სიმბოლოში სფეისი
        .trim(); // ბოლო სფეისის მოცილება
    }

    setformData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // ახალი ბარათის დამატება
  const handleSubmit = (e) => {
    e.preventDefault();
    // ბაგი 3: toUpperCase ფუნქციას დაემატა ფრჩხილები ()
    setWallet((prevWallet) => [
      ...prevWallet,
      { ...formData, holder: formData.holder.toUpperCase() }
    ]);

    // ბაგი 4: აქაც გასწორდა expiry ფორმის გასასუფთავებლად
    setformData({ type: 'visa', holder: '', number: '', expiry: '' });
  };

  // ბარათის წაშლა
  const deleteCard = (indexToDelete) => {
    setWallet((prevWallet) =>
      prevWallet.filter((_, index) => index !== indexToDelete)
    );
  };


  return (
    <div className="app-wrapper">
      {/* ბაგი 6: JSX კომენტარი გასწორდა */}
      {/* მარცხენა მხარე: ფორმა */}
      <div className="sidebar">
        <h2>ახალი ბარათი (React)</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>ბარათის ტიპი</label>
            <select name="type" value={formData.type} onChange={handleChange}>
              <option value="visa"> Visa </option>
              <option value="mastercard">Mastercard</option>
              <option value="amex">American Express</option>
            </select>
          </div>
          <div className="input-group">
            <label>მფლობელის სახელი</label>
            <input
              type="text"
              name="holder"
              required
              placeholder="Ana Alavidze"
              value={formData.holder}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>ბარათის ნომერი</label>
            <input
              type="text"
              name="number"
              maxLength="19" // 16 ციფრი + 3 სფეისი
              required
              placeholder="1234 5678 1234 5678"
              value={formData.number}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>მოქმედების ვადა</label>
            <input
              type="text"
              name="expiry" // ბაგი 4: დაემთხვა სტეიტის სახელს
              maxLength="5"
              required
              placeholder="MM/YY"
              value={formData.expiry}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="add-btn"> დამატება</button>
        </form>
      </div>

      {/* ბაგი 6: JSX კომენტარი გასწორდა */}
      {/* მარჯვენა მხარე: ბარათების სია */}
      <div className="main-content">
        {/* ბაგი 5: wallet.length თაიფო გასწორდა */}
        <h2>ჩემი საფულე ({wallet.length})</h2>
        <div className="cards-grid">
          {wallet.map((card, index) => (
            <div key={index} className={`credit-card ${card.type}`}>
              <div className="card-top">
                <span className="brand">{card.type.toUpperCase()}</span>
                <button className="delete-btn" onClick={() => deleteCard(index)}>წაშლა</button>
              </div>
              <div className="card-num">{card.number}</div>
              <div className="card-info">
                <div>
                  <div className="info-label">მფლობელი</div>
                  {/* ბაგი 7: დაემატა თავად მფლობელის სახელი (card.holder) */}
                  <div className="info-value">{card.holder}</div>
                </div>
                <div>
                  <div className="info-label">ვადა</div>
                  <div className="info-value">{card.expiry}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}