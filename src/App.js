import { Routes, Route } from "react-router-dom";
import { Items } from "./Items";
import { ItemDetail } from "./ItemDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Items />} />
      <Route path="/edit/:id" element={<ItemDetail />} />
    </Routes>
  );
}

export default App;
