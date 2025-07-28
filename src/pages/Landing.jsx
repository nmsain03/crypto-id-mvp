import { useMemo } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Landing() {
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
    <div className="relative bg-zinc-900 min-h-screen flex flex-col items-center justify-center px-4 py-10 text-white font-sans overflow-hidden">
      {/* 🔮 Floating Logos */}
      {floatingLogos.map(({ src, alt, left, top, rotate, delay }, index) => {
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
              left,
              top,
              width: `${size}px`,
              height: `${size}px`,
              objectFit: "contain",
              animation: "float 10s linear infinite",
              animationDelay: delay,
              filter: `drop-shadow(0 0 6px ${colorGlow})`,
              transform: `rotate(${rotate})`,
              opacity: 0.5,
            }}
          />
        );
      })}

      {/* 🌐 Landing Content */}
      <div className="z-10 text-center max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-4">Welcome to Cryptfie</h1>
        <p className="text-zinc-300 mb-6">
          One alias. All your crypto wallets. Search or connect to get started.
        </p>

        {/* 🔍 Search Field */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search @alias or wallet address"
            className="w-full max-w-md px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-[#fdf6ee]"
          />
        </div>

        {/* 🦊 Wallet Connect */}
        <ConnectWallet theme="dark" btnTitle="Connect Wallet" />
      </div>
    </div>
  );
}

