import { useState } from "react";

export default function CheckoutForm({ cartItems, onOrderComplete }) {
    const [form, setForm] = useState({ firstName: "", lastName: "", email: "", address: "", payment: "card" });
    const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !form.firstName.trim() ||
            !form.lastName.trim() ||
            !form.email.trim() ||
            !form.address.trim()
        ) {
            setError("Please fill in all fields.");
            return;
        }
        if (!form.email.includes("@")) {
            setError("Please enter a valid email address (must contain @).");
            return;
        }
        if (cartItems.length === 0) {
            setError("Your cart is empty — add products before checking out.");
            return;
        }

        setError("");
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setForm({ firstName: "", lastName: "", email: "", address: "", payment: "card" });
        onOrderComplete();
    };


    return (
        <section className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm mt-6">
            <h2 className="text-lg font-bold text-slate-800 mb-4">📋 Checkout</h2>

            <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={form.firstName}
                        onChange={handleChange}
                        className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={form.lastName}
                        onChange={handleChange}
                        className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                </div>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />

                <textarea
                    name="address"
                    placeholder="Shipping Address"
                    value={form.address}
                    onChange={handleChange}
                    rows={2}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
                />

                <div className="flex gap-4 text-sm text-slate-700">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                        <input
                            type="radio"
                            name="payment"
                            value="card"
                            checked={form.payment === "card"}
                            onChange={handleChange}
                        />
                        Card
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                        <input
                            type="radio"
                            name="payment"
                            value="cash"
                            checked={form.payment === "cash"}
                            onChange={handleChange}
                        />
                        Cash
                    </label>
                </div>

                {error && (
                    <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                        {error}
                    </p>
                )}

                <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-lg transition-colors cursor-pointer active:translate-y-0.5"
                >
                    Confirm Order
                </button>
            </form>

            {showModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
                    <div className="bg-white rounded-xl p-6 max-w-sm w-full text-center shadow-xl">
                        <div className="text-5xl mb-3">✅</div>
                        <h3 className="text-lg font-bold text-slate-800 mb-1">Congratulations!</h3>
                        <p className="text-slate-600 text-sm mb-5">Your order has been placed successfully.</p>
                        <button
                            onClick={closeModal}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-2 rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}