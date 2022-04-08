import "./App.css";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import ProuctList from "./Components/Product-List/ProuctList";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<ProuctList />} />
        <Route path="/product/:productId" element={<ProuctList />} />
      </Routes>
    </div>
  );
}

export default App;
