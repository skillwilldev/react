import { useAuth } from "@/hooks/useAuth.js";
import { useCart } from "@/hooks/useCart.js";
import { useTheme } from "@/hooks/useTheme.js";
import "./Navbar.css";

export default function Navbar({ onOpenCart, onOpenLogin }) {
  const { user, isAuthenticated, logout } = useAuth();
  const { totalQuantity } = useCart();
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="navbar__brand">
          <span className="navbar__logo" aria-hidden="true">
            🏷️
          </span>
          <span className="navbar__title">ShopCentral</span>
        </div>

        <nav className="navbar__actions">
          <button
            type="button"
            className="navbar__theme"
            onClick={toggleTheme}
            aria-label="თემის გადართვა"
            title={isDark ? "Light mode" : "Dark mode"}
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          <button
            type="button"
            className="navbar__cart"
            onClick={onOpenCart}
            aria-label="კალათის გახსნა"
          >
            🛍️
            {totalQuantity > 0 && (
              <span className="navbar__cart-badge mono">{totalQuantity}</span>
            )}
          </button>

          {isAuthenticated ? (
            <div className="navbar__user">
              <span className="navbar__user-name">{user.name}</span>
              <button
                type="button"
                className="navbar__auth-btn"
                onClick={logout}
              >
                გასვლა
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="navbar__auth-btn navbar__auth-btn--primary"
              onClick={onOpenLogin}
            >
              შესვლა
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
