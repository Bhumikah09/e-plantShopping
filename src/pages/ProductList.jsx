import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Snake Plant", price: 200, category: "Indoor" },
  { id: 2, name: "Aloe Vera", price: 150, category: "Succulent" },
  { id: 3, name: "Peace Lily", price: 250, category: "Indoor" },
  { id: 4, name: "Spider Plant", price: 180, category: "Indoor" },
  { id: 5, name: "Fern", price: 220, category: "Outdoor" },
  { id: 6, name: "Cactus", price: 120, category: "Succulent" }
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Plants</h2>

      {plants.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>{p.category}</p>
          <p>₹{p.price}</p>

          <button onClick={() => dispatch(addItem(p))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}