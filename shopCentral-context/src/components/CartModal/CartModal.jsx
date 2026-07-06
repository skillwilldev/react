import { useAuth } from "@/hooks/useAuth.js";
import { useCart } from "@/hooks/useCart.js";
import "./CartModal.css";

export default function CartModal({ onClose, onRequireLogin }) {
  const { isAuthenticated, user } = useAuth();
  const { items, increment, decrement, removeFromCart, clearCart, totalPrice } =
    useCart();

  function handleCheckout() {
    if (!isAuthenticated) {
      onRequireLogin();
      return;
    }
    clearCart();
    onClose();
  }

  return (
    <div className="cart-backdrop" onClick={onClose}>
      <aside
        className="cart-panel"
        role="dialog"
        aria-modal="true"
        aria-label="კალათა"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="cart-panel__header">
          <h2>კალათა</h2>
          <button
            type="button"
            className="cart-panel__close"
            onClick={onClose}
            aria-label="დახურვა"
          >
            ✕
          </button>
        </header>

        {items.length === 0 ? (
          <div className="cart-panel__empty">
            <p>კალათა ცარიელია</p>
            <span>დაამატეთ პროდუქტი კატალოგიდან</span>
          </div>
        ) : (
          <ul className="cart-panel__list">
            {items.map((item) => (
              <li key={item.id} className="cart-line">
                <div className="cart-line__art" aria-hidden="true">
                  {item.emoji}
                </div>
                <div className="cart-line__info">
                  <p className="cart-line__name">{item.name}</p>
                  <p className="cart-line__price mono">
                    ${item.price} × {item.quantity}
                  </p>
                </div>
                <div className="cart-line__controls">
                  <div className="cart-line__stepper">
                    <button
                      type="button"
                      aria-label="შემცირება"
                      onClick={() => decrement(item.id)}
                    >
                      −
                    </button>
                    <span className="mono">{item.quantity}</span>
                    <button
                      type="button"
                      aria-label="გაზრდა"
                      onClick={() => increment(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className="cart-line__remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    წაშლა
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <footer className="cart-panel__footer">
          <div className="cart-panel__total">
            <span>ჯამი</span>
            <span className="mono">${totalPrice.toFixed(2)}</span>
          </div>

          {!isAuthenticated && items.length > 0 && (
            <p className="cart-panel__notice">
              შესყიდვის დასასრულებლად საჭიროა შესვლა
              {user ? "" : ""}
            </p>
          )}

          <div className="cart-panel__actions">
            <button
              type="button"
              className="cart-panel__clear"
              onClick={clearCart}
              disabled={items.length === 0}
            >
              გასუფთავება
            </button>
            <button
              type="button"
              className="cart-panel__checkout"
              onClick={handleCheckout}
              disabled={items.length === 0}
            >
              {isAuthenticated ? "შეკვეთის გაფორმება" : "შესვლა და გაფორმება"}
            </button>
          </div>
        </footer>
      </aside>
    </div>
  );
}
