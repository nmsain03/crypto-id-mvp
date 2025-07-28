import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx"; // ✅ NEU!
import PublicProfile from "./pages/PublicProfile.jsx";
import { ThirdwebProvider } from "@thirdweb-dev/react";

export default function App() {
  return (
    <ThirdwebProvider activeChain="ethereum">
      <Routes>
        <Route path="/" element={<Landing />} /> {/* Landing Page als Start */}
        <Route path="/profile/:alias" element={<PublicProfile />} /> {/* Falls du sowas brauchst */}
      </Routes>
    </ThirdwebProvider>
  );
}
