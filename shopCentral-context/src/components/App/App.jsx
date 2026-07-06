import { useState } from "react";
import { AuthProvider } from "@/context/AuthContext.jsx";
import { CartProvider } from "@/context/CartContext.jsx";
import { ThemeProvider } from "@/context/ThemeContext.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import ProductList from "../ProductList/ProductList.jsx";
import CartModal from "../CartModal/CartModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import "./App.css";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <AppShell />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

function AppShell() {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  return (
    <div className="app">
      <Navbar
        onOpenCart={() => setCartOpen(true)}
        onOpenLogin={() => setLoginOpen(true)}
      />

      <main>
        <section className="app__hero">
          <p className="app__eyebrow">React Context API დემო</p>
          <h1>ShopCentral</h1>
          <p className="app__subtitle">
            ონლაინ მაღაზია, სადაც ავტორიზაცია, კალათა და თემა იმართება
            გლობალურად — Props Drilling-ის გარეშე.
          </p>
        </section>

        <ProductList />
      </main>

      {isCartOpen && (
        <CartModal
          onClose={() => setCartOpen(false)}
          onRequireLogin={() => {
            setCartOpen(false);
            setLoginOpen(true);
          }}
        />
      )}

      {isLoginOpen && <LoginModal onClose={() => setLoginOpen(false)} />}
    </div>
  );
}
