export default function ShoppingCart({ cartItems, onIncrease, onDecrease, onRemove }) {
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <section className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-800 mb-4">🛒 Shopping Cart</h2>

            {cartItems.length === 0 ? (
                <p className="text-slate-400 text-sm">Your cart is empty</p>
            ) : (
                <ul className="space-y-3 mb-4 max-h-72 overflow-y-auto pr-1">
                    {cartItems.map((item) => (
                        <li
                            key={item.id}
                            className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2"
                        >
                            <div className="flex items-center gap-2 min-w-0">
                                <span className="text-2xl">{item.photo}</span>
                                <div className="min-w-0">
                                    <p className="text-sm font-medium text-slate-800 truncate">
                                        {item.name}
                                    </p>
                                    <p className="text-xs text-slate-500">${item.price} / pc.</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                                <button
                                    onClick={() => onDecrease(item.id)}
                                    className="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-bold"
                                >
                                    −
                                </button>
                                <span className="w-5 text-center text-sm">{item.quantity}</span>
                                <button
                                    onClick={() => onIncrease(item.id)}
                                    className="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-bold"
                                >
                                    +
                                </button>
                                <button
                                    onClick={() => onRemove(item.id)}
                                    className="text-red-500 hover:text-red-700 text-xs font-medium ml-1"
                                >
                                    Remove
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            <div className="flex items-center justify-between border-t border-slate-200 pt-3">
                <span className="font-semibold text-slate-700">Total:</span>
                <span className="text-xl font-bold text-indigo-600">
                    ${totalPrice.toFixed(2)}
                </span>
            </div>
        </section>
    );
}