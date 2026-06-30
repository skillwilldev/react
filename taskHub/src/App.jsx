import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

const STORAGE_KEY = "taskhub_tasks";

const STATUS_ORDER = ["todo", "in_progress", "done"];

function getInitialTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function App() {
  const [tasks, setTasks] = useState(getInitialTasks);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  function addTask(newTask) {
    setTasks((prev) => [...prev, newTask]);
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  function moveTask(id) {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== id) return task;

        const currentIndex = STATUS_ORDER.indexOf(task.status);
        const nextStatus = STATUS_ORDER[currentIndex + 1];

        return nextStatus ? { ...task, status: nextStatus } : task;
      })
    );
  }

  return (
    <div className="app">
      <h1>TaskHub</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onMove={moveTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;
