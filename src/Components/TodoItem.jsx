export default function TodoItem({ todo, toggleComplete, deleteTask, startEdit }) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="left">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        <div className="task-info">
          <span className={todo.completed ? "completed" : ""}>{todo.title}</span>
          <div className="meta">
            {todo.priority && <span className={`badge ${todo.priority}`}>{todo.priority}</span>}
            {todo.dueDate && <span className="due-date">📅 {todo.dueDate}</span>}
          </div>
        </div>
      </div>
      <div className="actions">
        <button className="edit-btn" onClick={() => startEdit(todo)}>✏️</button>
        <button className="delete-btn" onClick={() => deleteTask(todo.id)}>🗑️</button>
      </div>
    </li>
  );
}
