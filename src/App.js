import { HashRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
