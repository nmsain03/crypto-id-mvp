import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import PublicProfile from "./pages/PublicProfile.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicProfile />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
