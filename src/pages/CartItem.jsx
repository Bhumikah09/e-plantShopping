import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../redux/CartSlice";

export default function CartItem() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>

      {items.map(i => (
        <div key={i.id}>
          <h3>{i.name}</h3>
          <p>₹{i.price}</p>
          <p>Qty: {i.quantity}</p>

          <button onClick={() => dispatch(updateQuantity({id: i.id, quantity: i.quantity + 1}))}>+</button>
          <button onClick={() => dispatch(updateQuantity({id: i.id, quantity: i.quantity - 1}))}>-</button>
          <button onClick={() => dispatch(removeItem(i.id))}>Delete</button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      <button onClick={() => alert("Coming Soon")}>Checkout</button>
    </div>
  );
}