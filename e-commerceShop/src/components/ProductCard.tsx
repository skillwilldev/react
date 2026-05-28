import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image?: string;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <div style={styles.cardStyle}>
      <img
        src={product.image || 'https://via.placeholder.com/150'}
        alt={product.name}
        style={styles.imageStyle}
      />
      <h3>{product.name}</h3>
      <p>ფასი: ${product.price}</p>

      <button
        onClick={toggleFavorite}
        style={{
          ...styles.buttonStyle,
          backgroundColor: isFavorite ? '#ff4d4d' : '#e0e0e0',
          color: isFavorite ? 'white' : 'black',
        }}
      >
        {isFavorite ? '❤️ ფავორიტია' : '🤍 ფავორიტი'}
      </button>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  cardStyle: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '10px',
    maxWidth: '200px',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  },

  imageStyle: {
    width: '100%',
    height: 'auto',
    borderRadius: '4px'
  },

  buttonStyle: {
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease'
  }
}