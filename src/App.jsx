import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import PublicProfile from "./pages/PublicProfile.jsx";
import { ThirdwebProvider } from "@thirdweb-dev/react";

export default function App() {
  return (
    <ThirdwebProvider activeChain="ethereum">
      <Routes>
        <Route path="/" element={<PublicProfile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ThirdwebProvider>
  );
}
