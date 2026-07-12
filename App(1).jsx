import { Routes, Route, Navigate } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function App() {
  return (
    <Routes>
      {/* Landing Page */}
      <Route path="/" element={<AboutUs />} />

      {/* Product Listing */}
      <Route path="/plants" element={<ProductList />} />

      {/* Shopping Cart */}
      <Route path="/cart" element={<CartItem />} />

      {/* Redirect any unknown route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
