import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, remove } from "../redux/cartSlice";
import { Link } from "react-router-dom";

export default function Cart() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div>
      <h2>Cart</h2>

      {items.map(i => (
        <div key={i.id}>
          <h3>{i.name}</h3>
          <p>₹{i.price}</p>
          <p>Qty: {i.quantity}</p>

          <button onClick={() => dispatch(increase(i.id))}>+</button>
          <button onClick={() => dispatch(decrease(i.id))}>-</button>
          <button onClick={() => dispatch(remove(i.id))}>Delete</button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>

      <br />
      <Link to="/products">Continue Shopping</Link>
    </div>
  );
}