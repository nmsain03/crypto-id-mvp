import { useState, useMemo } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Landing() {
  const [isHovered, setIsHovered] = useState(false);

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

  return (
    <div className="relative bg-zinc-900 min-h-screen flex flex-col justify-center items-center px-4 py-8 text-white font-sans overflow-hidden">
      {/* Floating Background Logos */}
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
              transform: `rotate(${Math.random() * 360}deg)`,
              opacity: 0.5,
            }}
          />
        );
      })}

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-4">
        <h1 className="text-2xl font-bold">Welcome to Cryptfie</h1>
        <p className="text-sm text-zinc-400">
          One alias. All your crypto wallets. Search or connect to get started.
        </p>

        <input
          type="text"
          placeholder="Search @alias or wallet address"
          className="px-4 py-2 w-72 rounded-md bg-zinc-900 text-white border border-zinc-700 focus:outline-none transition-all"
          style={{
            borderColor: isHovered ? "#fdf6ee" : "#3f3f46",
            boxShadow: isHovered ? "0 0 8px #fdf6ee" : "none",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />

        <div className="flex justify-center">
          <ConnectWallet theme="dark" btnTitle="Connect Wallet" />
        </div>
      </div>
    </div>
  );
}
