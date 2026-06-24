import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css";


function App() {
  const [students, setStudents] = useState([]);
  const [nextId, setNextId] = useState(1);

  function addStudent(name) {
    setStudents((prev) => [...prev, { id: nextId, name }]);
    setNextId((n) => n + 1);
  }

  function deleteStudent(id) {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  }

  return (
    <div className="app">
      <div className="header">
        <h1>სტუდენტების სია</h1>
        <p className="subtitle">სტუდენტების მართვის სისტემა</p>
      </div>

      <div className="stats">
        <div className="stat-card">
          <span className="stat-label">სულ სტუდენტი</span>
          <span className="stat-value">{students.length}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">სტატუსი</span>
          <span className={`stat-status ${students.length > 0 ? "active" : "empty"}`}>
            {students.length > 0 ? "● აქტიური" : "○ ცარიელი"}
          </span>
        </div>
      </div>

      <StudentForm onAdd={addStudent} />
      <StudentList students={students} onDelete={deleteStudent} />
    </div>
  );
}

export default App;
