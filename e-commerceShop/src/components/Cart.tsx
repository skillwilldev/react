import React, { useState } from 'react';

interface CartProps {
  initialTotal: number; // საწყისი ფასი, რასაც კომპონენტი მიიღებს
}

export const Cart: React.FC<CartProps> = ({ initialTotal }) => {
  // სტეიტები
  const [couponInput, setCouponInput] = useState<string>('');
  const [discount, setDiscount] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // პრომო კოდის შემოწმების ფუნქცია
  const handleApplyCoupon = () => {
    if (couponInput.trim() === 'SAVE10') {
      setDiscount(10);
      setErrorMessage('');
    } else {
      setDiscount(0);
      setErrorMessage('არასწორი პრომო კოდი');
    }
  };

  const finalTotal = Math.max(0, initialTotal - discount);

  return (
    <div style={styles.cartContainerStyle}>
      <h2>🛒 შეკვეთის შეჯამება</h2>
      <hr />
      <div style={styles.priceRowStyle}>
        <span>საწყისი ფასი:</span>
        <span>${initialTotal}</span>
      </div>

      {discount > 0 && (
        <div style={{ ...styles.priceRowStyle, color: 'green' }}>
          <span>ფასდაკლება:</span>
          <span>-${discount}</span>
        </div>
      )}

      <div style={styles.priceRowStyle}>
        <strong>საბოლოო ფასი:</strong>
        <strong>${finalTotal}</strong>
      </div>

      <div style={styles.couponSectionStyle}>
        <input
          type="text"
          placeholder="შეიყვანეთ პრომო კოდი"
          value={couponInput}
          onChange={(e) => setCouponInput(e.target.value)}
          style={styles.inputStyle}
        />
        <button onClick={handleApplyCoupon} style={styles.applyButtonStyle}>
          გამოყენება
        </button>
      </div>

      {errorMessage && <p style={styles.errorStyle}>{errorMessage}</p>}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  cartContainerStyle: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '400px',
    margin: '20px auto',
    backgroundColor: '#f9f9f9'
  },

  priceRowStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0'
  },

  couponSectionStyle: {
    display: 'flex',
    gap: '10px',
    marginTop: '20px'
  },

  inputStyle: {
    flex: 1,
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  },

  applyButtonStyle: {
    padding: '8px 16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },

  errorStyle: {
    color: 'red',
    fontSize: '14px',
    marginTop: '8px'
  }

}
