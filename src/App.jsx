import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="background-image">
      <h1>Welcome to Paradise Nursery</h1>

      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default App;