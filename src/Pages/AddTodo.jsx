import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";

export default function AddTodo() {
  const { todos, setTodos } = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState("");
  const navigate = useNavigate();

  const addTask = () => {
    if (!title) return;
    setTodos([...todos, { id: Date.now(), title, completed: false, priority, dueDate }]);
    navigate("/"); // go back to Home after adding
  };

  return (
    <>
      {/* Full-width navbar */}
      <Header />

      {/* Centered container */}
      <div className="main-content">
        <div className="todo-container">
          <h1>Add New Task</h1>

          {/* Input group */}
          <div className="input-group">
            <input
              type="text"
              placeholder="Task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
            <button onClick={addTask}>Add</button>
          </div>

          {/* Back button at the bottom */}
          <div style={{ marginTop: "30px", textAlign: "center" }}>
            <button
              className="back-btn"
              onClick={() => navigate("/")}
            >
              ← Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
