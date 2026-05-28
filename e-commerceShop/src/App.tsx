import React from 'react';
import { ProductCard } from './components/ProductCard';
import { Cart } from './components/Cart';

const sampleProduct = {
  id: 1,
  name: "სმარტფონი React X",
  price: 150,
  image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=150"
};

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.shop__title}>ReactShop პერსონალიზაცია</h1>

      <div style={styles.shop__inner}>
        <div>
          <h2>ნაწილი 1: პროდუქტი</h2>
          <ProductCard product={sampleProduct} />
        </div>

        <div>
          <h2>ნაწილი 2: კალათა</h2>
          <Cart initialTotal={150} />
        </div>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '1044px',
    margin: '0 auto',
    padding: '0 10px',
    fontFamily: 'Arial, sans-serif'
  },
  shop__inner: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center'
  },
  shop__title: {
    textAlign: 'center',
    marginBottom: '20px'
  }
}

export default App;