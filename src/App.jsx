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

import { ThirdwebProvider } from "@thirdweb-dev/react";

function App() {
  return (
    <ThirdwebProvider activeChain="ethereum">
      {/* dein Layout oder Routes */}
    </ThirdwebProvider>
  );
}
