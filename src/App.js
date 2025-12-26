import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import SubmitForm from "./components/SubmitForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/submit" element={<SubmitForm />} />
    </Routes>
  );
}

export default App;
