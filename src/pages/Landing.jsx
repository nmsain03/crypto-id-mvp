import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { ConnectWallet, ThirdwebProvider } from "@thirdweb-dev/react";
import PublicProfile from "./pages/PublicProfile.jsx";

function Landing() {
  const [search, setSearch] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const floatingLogos = useMemo(() => {
    const logos = [
      { src: "/btclogo.png", alt: "BTC", size: 32 },
      { src: "/ethlogo.png", alt: "ETH", size: 32 },
      { src: "/sologo.png", alt: "SOL", size: 42 },
    ];
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      ...logos[Math.floor(Math.random() * logos.length)],
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      rotate: `${Math.random() * 360}deg`,
      delay: `${Math.random() * 5}s`,
    }));
  }, []);

  const handleSearch = (e) => {
    if (e.key === "Enter" && search.trim() !== "") {
      navigate(`/profile/${search.trim()}`);
    }
  };

  return (
    <div className="relative bg-zinc-900 min-h-screen flex justify-center items-center px-4 py-8 text-white font-sans overflow-hidden">
      {floatingLogos.map(({ src, alt }, index) => {
        const size = alt === "SOL" ? 40 : 30;
        const colorGlow = {
          BTC: "rgba(247, 147, 26, 0.3)",
          ETH: "rgba(59, 130, 246, 0.3)",
          SOL: "rgba(0, 255, 163, 0.2)",
        }[alt] || "rgba(255,255,255,0.1)";

        return (
          <img
            key={index}
            src={src}
            alt={alt}
            className="floating-logo pointer-events-none"
            style={{
              position: "absolute",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${size}px`,
              height: `${size}px`,
              objectFit: "contain",
              animation: "float 10s linear infinite",
              animationDelay: `${Math.random() * 5}s`,
              filter: `drop-shadow(0 0 6px ${colorGlow})`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        );
      })}

      <div
        className="relative rounded-[0.95rem] p-6 w-full max-w-md flex flex-col gap-6
        bg-zinc-800/30 backdrop-blur-md shadow-inner ring-1 ring-white/5 overflow-hidden border-2 z-10"
        style={{
          borderColor: "#fdf6ee",
          boxShadow: isHovered ? "0 0 10px #fdf6ee" : "0 0 0px transparent",
          transition: "box-shadow 250ms ease-in-out",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h1 className="text-2xl font-bold text-center">Search Profiles</h1>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleSearch}
          placeholder="Enter @alias..."
          className="bg-zinc-900 text-white border border-zinc-700 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fdf6ee] transition-shadow"
        />

        <div className="flex justify-center">
          <ConnectWallet theme="dark" btnTitle="Connect Wallet" />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThirdwebProvider activeChain="ethereum">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/profile/:alias" element={<PublicProfile />} />
      </Routes>
    </ThirdwebProvider>
  );
}
