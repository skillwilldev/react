import { memo } from "react";
import "./PricePreview.css";

function PricePreview({ price, formatPrice }) {
  return (
    <div className="price-preview">
      <span className="price-preview__label">Price preview</span>
      <span className="price-preview__value">{formatPrice(price)}</span>
    </div>
  );
}

export default memo(PricePreview);
