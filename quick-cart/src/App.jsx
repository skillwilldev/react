import { useState } from "react";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
import CheckoutForm from "./components/CheckoutForm";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increaseQty = (id) =>
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    );

  const decreaseQty = (id) =>
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );

  const removeItem = (id) =>
    setCartItems((prev) => prev.filter((item) => item.id !== id));

  const clearCart = () => setCartItems([]);

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8">
      <header className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900">🛍️ QuickCart</h1>
        <p className="text-slate-500 text-sm mt-1">
          React Educational Project — Functional E-Commerce Store
        </p>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ProductList onAddToCart={addToCart} />
        </div>

        <div>
          <ShoppingCart
            cartItems={cartItems}
            onIncrease={increaseQty}
            onDecrease={decreaseQty}
            onRemove={removeItem}
          />
          <CheckoutForm cartItems={cartItems} onOrderComplete={clearCart} />
        </div>
      </main>
    </div>
  );
}