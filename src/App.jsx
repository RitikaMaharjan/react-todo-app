import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AddTodo from "./Pages/AddTodo";
import EditTodo from "./Pages/EditTodo";
import { TodoProvider } from "./context/TodoContext";
import './TodoApp.css';

function App() {
  return (
    <TodoProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddTodo />} />
          <Route path="/edit/:id" element={<EditTodo />} />
        </Routes>
      </Router>
    </TodoProvider>
  );
}

export default App;
