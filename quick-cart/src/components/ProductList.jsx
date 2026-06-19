import { useState } from "react";
import { PRODUCTS, CATEGORIES } from "../data/products";

export default function ProductList({ onAddToCart }) {
    const [activeCategory, setActiveCategory] = useState("All");

    const filtered = activeCategory === "All"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === activeCategory);

    return (
        <section className="flex-1">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Product Catalog</h2>

            <div className="flex flex-wrap gap-2 mb-6">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border cursor-pointer ${activeCategory === cat
                            ? "bg-indigo-600 text-white border-indigo-600"
                            : "bg-white text-slate-600 border-slate-300 hover:border-indigo-400"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="text-5xl mb-3 text-center">{product.photo}</div>
                        <span className="text-xs uppercase tracking-wide text-indigo-500 font-semibold mb-1">
                            {product.category}
                        </span>
                        <h3 className="font-semibold text-slate-800 mb-1">{product.name}</h3>
                        <p className="text-lg font-bold text-slate-900 mb-3">${product.price}</p>
                        <button
                            onClick={() => onAddToCart(product)}
                            className="mt-auto bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 rounded-lg transition-colors cursor-pointer active:translate-y-0.5"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}