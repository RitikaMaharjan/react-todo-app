import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">My Todo App</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/add">Add Task</Link>
      </div>
    </nav>
  );
}

export default Navbar;
