import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleComplete, deleteTask, startEdit }) {
  if (todos.length === 0)
    return <div className="empty">No tasks found</div>;

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          startEdit={startEdit}
        />
      ))}
    </ul>
  );
}
