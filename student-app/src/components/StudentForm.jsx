import { useState } from "react";
function StudentForm({onAdd}) {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  function handleAdd() {
    if (!name.trim()) {
      setError(true);
      return;
    }
    onAdd(name.trim());
    setName("");
    setError(false);
  }

  function handleKey(e) {
    if (e.key === "Enter") handleAdd();
  }

  return (
    <div className="form-card">
      <p className="form-title">ახალი სტუდენტი</p>
      <div className="form-row">
        <input
          type="text"
          className={`input ${error ? "input-error" : ""}`}
          placeholder="სახელი და გვარი..."
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError(false);
          }}
          onKeyDown={handleKey}
        />
        <button className="btn-add" onClick={handleAdd}>
          + დამატება
        </button>
      </div>
      {error && (
        <p className="error-text">სახელი არ შეიძლება იყოს ცარიელი</p>
      )}
    </div>
  );
}

export default StudentForm;
