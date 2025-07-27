import { useState, useMemo } from "react";

export default function Login() {
  const floatingLogos = useMemo(() => {
    const logos = [
      { src: "/btclogo.png", alt: "BTC", size: 32 },
      { src: "/ethlogo.png", alt: "ETH", size: 32 },
      { src: "/sologo.png", alt: "SOL", size: 42 },
    ];

    const combined = [];

    for (let i = 0; i < 60; i++) {
      const logo = logos[Math.floor(Math.random() * logos.length)];
      combined.push({
        id: i,
        src: logo.src,
        alt: logo.alt,
        size: logo.alt === "SOL" ? 42 : 32,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        rotate: `${Math.random() * 360}deg`,
        delay: `${Math.random() * 5}s`,
        glow:
          logo.alt === "BTC"
            ? "rgba(247, 147, 26, 0.3)"
            : logo.alt === "ETH"
            ? "rgba(59, 130, 246, 0.3)"
            : "rgba(0, 255, 163, 0.2)",
      });
    }

    return combined;
  }, []);

  return (
    <div className="relative bg-zinc-900 min-h-screen flex justify-center items-center px-4 py-8 text-white font-sans overflow-hidden">
      {/* Floating Logos */}
      {floatingLogos.map((logo) => (
        <img
          key={logo.id}
          src={logo.src}
          alt={logo.alt}
          className="pointer-events-none"
          style={{
            position: "absolute",
            left: logo.left,
            top: logo.top,
            width: `${logo.size}px`,
            height: `${logo.size}px`,
            objectFit: "contain",
            animation: "float 10s linear infinite",
            animationDelay: logo.delay,
            transform: `rotate(${logo.rotate})`,
            filter: `drop-shadow(0 0 6px ${logo.glow})`,
            opacity: 0.5,
          }}
        />
      ))}

      {/* Login Box */}
      <div className="relative z-10 bg-zinc-800 rounded-xl p-8 shadow-lg border border-white/20">
        <h2 className="text-xl font-bold mb-4 text-center">Log in to Cryptfie</h2>
        <input
          type="email"
          placeholder="Email address"
          className="w-full p-2 rounded mb-4 bg-zinc-900 border border-gray-700 text-white"
        />
        <button className="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded text-white mb-2">
          Log in with Email
        </button>
        <div className="text-center text-gray-400 mb-2">or</div>
        <button className="w-full p-2 border border-gray-600 hover:border-gray-500 rounded text-white">
          Connect Wallet
        </button>
        <p className="text-sm text-center mt-4 text-gray-500">
          Don’t have an account? <a href="#" className="text-blue-400">Create one</a>
        </p>
      </div>
    </div>
  );
}
