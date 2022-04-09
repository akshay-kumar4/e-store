import "./App.css";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import ProuctList from "./Components/Product-List/ProuctList";
import ProductDetails from "./Components/Product-Details/ProductDetails";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<ProuctList />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
