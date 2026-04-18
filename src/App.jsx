import { useState } from "react";
import ProductList from "./pages/ProductList";
import "./App.css";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="background-image">
      {!showProductList ? (
        <div>
          <h1>Welcome to Paradise Nursery</h1>

          <button onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;