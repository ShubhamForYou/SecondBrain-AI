import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/screens/Dashboard";
import { Login } from "./components/screens/Login";
import { Signup } from "./components/screens/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
