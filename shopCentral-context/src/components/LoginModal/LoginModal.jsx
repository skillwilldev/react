import { useState } from "react";
import { useAuth } from "@/hooks/useAuth.js";
import "./LoginModal.css";

export default function LoginModal({ onClose }) {
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!name.trim() || !email.trim()) return;
    login({ name: name.trim(), email: email.trim() });
    onClose();
  }

  return (
    <div className="login-backdrop" onClick={onClose}>
      <div
        className="login-modal"
        role="dialog"
        aria-modal="true"
        aria-label="შესვლა"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="login-modal__close"
          onClick={onClose}
          aria-label="დახურვა"
        >
          ✕
        </button>

        <h2>შესვლა</h2>
        <p className="login-modal__hint">
          ეს დემო ავტორიზაციაა — შეიყვანეთ ნებისმიერი სახელი და ელფოსტა.
        </p>

        <form onSubmit={handleSubmit}>
          <label>
            სახელი
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Melik"
              required
            />
          </label>

          <label>
            ელფოსტა
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="melo@gmail.com"
              required
            />
          </label>

          <button type="submit" className="login-modal__submit">
            შესვლა
          </button>
        </form>
      </div>
    </div>
  );
}
