import { useCart } from "@/hooks/useCart.js";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { items, addToCart, increment, decrement } = useCart();

  const line = items.find((item) => item.id === product.id);
  const quantity = line?.quantity ?? 0;

  return (
    <article className="product-tag">
      <span className="product-tag__punch" aria-hidden="true" />
      <div className="product-tag__art" aria-hidden="true">
        {product.emoji}
      </div>

      <div className="product-tag__body">
        <p className="product-tag__category">{product.category}</p>
        <h3 className="product-tag__name">{product.name}</h3>
        <p className="product-tag__price mono">${product.price}</p>
      </div>

      <div className="product-tag__perforation" aria-hidden="true" />

      {quantity === 0 ? (
        <button
          type="button"
          className="product-tag__add"
          onClick={() => addToCart(product)}
        >
          კალათაში დამატება
        </button>
      ) : (
        <div className="product-tag__stepper">
          <button
            type="button"
            aria-label="შემცირება"
            onClick={() => decrement(product.id)}
          >
            −
          </button>
          <span className="mono" aria-live="polite">
            {quantity}
          </span>
          <button
            type="button"
            aria-label="გაზრდა"
            onClick={() => increment(product.id)}
          >
            +
          </button>
        </div>
      )}
    </article>
  );
}
