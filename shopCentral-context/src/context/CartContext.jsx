import { createContext, useState, useCallback, useMemo } from "react";

export const CartContext = createContext(null);

      export function CartProvider({ children }) {
  // items: [{ id, name, price, emoji, quantity }]
  const [items, setItems] = useState([]);

  const addToCart = useCallback((product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((productId) => {
    setItems((prev) => prev.filter((item) => item.id !== productId));
  }, []);

  const increment = useCallback((productId) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }, []);

  const decrement = useCallback((productId) => {
    setItems((prev) =>
      prev.flatMap((item) => {
        if (item.id !== productId) return [item];
        if (item.quantity <= 1) return []; // drop below 1 -> remove line
        return [{ ...item, quantity: item.quantity - 1 }];
      })
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalQuantity = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const totalPrice = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      addToCart,
      removeFromCart,
      increment,
      decrement,
      clearCart,
      totalQuantity,
      totalPrice,
    }),
    [items, addToCart, removeFromCart, increment, decrement, clearCart, totalQuantity, totalPrice]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
