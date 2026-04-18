import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const items = useSelector(state => state.cart.items);
  const total = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div>
      <h2>🌿 GreenLeaf</h2>
      <Link to="/">Home</Link> | 
      <Link to="/products">Products</Link> | 
      <Link to="/cart">Cart ({total})</Link>
    </div>
  );
}