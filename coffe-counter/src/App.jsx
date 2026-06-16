import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const coffeePrice = 5;
  const maxCount = 30;

  const increment = () => {
    setCount((prev) => prev < maxCount ? prev + 1 : maxCount);
  }

  const decrement = () => {
    setCount((prev) => prev > 0 ? prev - 1 : 0);
  }

  return (
    <>
      <div className="App">
        <div className="container">
          <h1>Coffee Counter</h1>
          <p className="app__count">Number of cups: <span>{count}</span></p>
          <div className="app__btns">
            <button onClick={increment} disabled={count >= maxCount}>
              +
            </button>
            <button onClick={decrement} disabled={count <= 0}>
              -
            </button>
          </div>
          <p className="app__total">Total Price: <span>{count * coffeePrice}</span> GEL</p>
        </div>
      </div >
    </>
  )
}

export default App
