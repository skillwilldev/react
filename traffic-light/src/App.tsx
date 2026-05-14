import './App.css';

const App = () => {
  return (
    <div className="traffic">
      <div className="traffic__inner">
        <h2>ჭკვიანი შუქნიშანი</h2>
        <input type="checkbox" id="toggle" />
        <div className="circle"></div>
        <label htmlFor="toggle" className="custom-button">
          ფერის შეცვლა
        </label>
      </div>
    </div>
  );
};

export default App;