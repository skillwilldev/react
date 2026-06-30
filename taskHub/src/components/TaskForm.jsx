import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;

    onAddTask({
      id: Date.now(),
      title: trimmedTitle,
      status: "todo",
      priority,
    });

    setTitle("");
    setPriority("Medium");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="შეიყვანეთ ტექსტი"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <button type="submit">დამატება</button>
    </form>
  );
}

export default TaskForm;
