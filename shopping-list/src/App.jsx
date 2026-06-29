import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('todo_items');
    return savedItems ? JSON.parse(savedItems) : [];
  });
  const [inputValue, setInputValue] = useState('');

   useEffect(() => {
    localStorage.setItem('todo_items', JSON.stringify(items));
  }, [items]);

  // ნივთის დამატება
  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      const newItem = {
        id: Date.now(),
        text: inputValue,
        completed: false
      };

      setItems([...items, newItem]);
      setInputValue('');
    }
  };

  // ნივთის წაშლა ID-ის მიხედვით
  const handleDeleteItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  // ნივთის მონიშვნა (გადახაზვა / შეცვლა)
  const handleToggleComplete = (id) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });


    // const index = items.findIndex(item => item.id === id);
    // if (index === -1) return;
    // const updatedItems = [...items];
    // updatedItems[index] = {
    //   ...updatedItems[index],
    //   completed: !updatedItems[index].completed
    // };

    setItems(updatedItems);
  };

  // Enter ღილაკზე დაჭერით დამატება
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddItem();
    }
  };

  return (
    <div className="container">
      <h2 className="title">საყიდლების სია</h2>

      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="ჩაწერე ნივთი..."
          className="input"
        />
        <button onClick={handleAddItem} className="add-button">
          დამატება
        </button>
      </div>

      <ul className="list">
        {items.map((item) => (
          <li key={item.id} className="list-item">
            <input type="checkbox"
              onChange={() => handleToggleComplete(item.id)}
              checked={item.completed}
              className='item-checkbox' />
            <span
              // onClick={() => handleToggleComplete(item.id)}
              className={`item-text ${item.completed ? 'completed' : ''}`}
            >
              {item.text}
            </span>
            <button
              onClick={() => handleDeleteItem(item.id)}
              className="delete-button"
              title="წაშლა"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      {items.length === 0 && (
        <p className="empty-message">სია ცარიელია. დაამატე რაიმე!</p>
      )}
    </div>
  );

}
export default App;