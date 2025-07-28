import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import PublicProfile from "./pages/PublicProfile.jsx";
import Dashboard from "./pages/Dashboard.jsx"; // ⬅️ NEU
import { ThirdwebProvider } from "@thirdweb-dev/react";

export default function App() {
  return (
    <ThirdwebProvider activeChain="ethereum">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/profile/:alias" element={<PublicProfile />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* ✅ NEU */}
      </Routes>
    </ThirdwebProvider>
  );
}
