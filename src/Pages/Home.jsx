import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import Header from "../Components/Header";      // fixed path
import TodoList from "../Components/TodoList"; // fixed path
import { Link } from "react-router-dom";

export default function Home() {
  const { todos, setTodos } = useContext(TodoContext);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
  };

  const deleteTask = (id) => setTodos(todos.filter(todo => todo.id !== id));

  const startEdit = (todo) => {
    window.location.href = `/edit/${todo.id}`;
  };

  const filteredTodos = todos
    .filter(todo =>
      filter === "all" ? true : filter === "active" ? !todo.completed : todo.completed
    )
    .filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      {/* NAVBAR */}
      <Header />

      {/* MAIN CONTENT WRAPPER (centers dashboard content) */}
      <div className="main-content">
        <div className="todo-container">

          <input
            type="text"
            placeholder="Search task..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />

          <div className="filters">
            {["all", "active", "completed"].map(f => (
              <button
                key={f}
                className={filter === f ? "active" : ""}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <TodoList
            todos={filteredTodos}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            startEdit={startEdit}
          />

          <div className="footer">
            <span>{todos.filter(t => !t.completed).length} tasks left</span>
            <Link to="/add">
              <button>Add New Task</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
