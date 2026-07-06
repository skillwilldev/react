import { useMemo, useState } from "react";
import { products } from "@/data/products.js";
import ProductCard from "../ProductCard/ProductCard.jsx";
import "./ProductList.css";

export default function ProductList() {
  const [activeCategory, setActiveCategory] = useState("ყველა");

  const categories = useMemo(
    () => ["ყველა", ...new Set(products.map((p) => p.category))],
    []
  );

  const visibleProducts = useMemo(
    () =>
      activeCategory === "ყველა"
        ? products
        : products.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <section className="product-list" id="catalog">
      <div className="product-list__header">
        <h2>კატალოგი</h2>
        <div className="product-list__filters" role="tablist" aria-label="კატეგორიები">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              className={
                "product-list__filter" +
                (activeCategory === category ? " is-active" : "")
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="product-list__grid">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
