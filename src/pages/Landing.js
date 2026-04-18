import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>GreenLeaf Plant Store</h1>
      <p>Your one-stop shop for beautiful houseplants.</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}