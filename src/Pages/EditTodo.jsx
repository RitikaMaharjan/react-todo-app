import { useContext, useState, useEffect } from "react";
import { TodoContext } from "../context/TodoContext";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Components/Header";

export default function EditTodo() {
  const { todos, setTodos } = useContext(TodoContext);
  const { id } = useParams();
  const todo = todos.find(t => t.id === +id);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setPriority(todo.priority);
      setDueDate(todo.dueDate);
    }
  }, [todo]);

  const updateTask = () => {
    setTodos(todos.map(t => t.id === todo.id ? { ...t, title, priority, dueDate } : t));
    navigate("/");
  };

  return (
    <div className="todo-container">
      <Header />
      <div className="input-group">
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <select value={priority} onChange={e => setPriority(e.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
        <button onClick={updateTask}>Update</button>
      </div>
    </div>
  );
}
