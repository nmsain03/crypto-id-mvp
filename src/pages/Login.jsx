import { useState, useMemo } from "react";

export default function Login() {
  const [isHovered, setIsHovered] = useState(false);

  const floatingLogos = useMemo(() => {
    const logos = [
      { src: "/btclogo.png", alt: "BTC", size: 32 },
      { src: "/ethlogo.png", alt: "ETH", size: 32 },
      { src: "/sologo.png", alt: "SOL", size: 42 },
    ];

    const combined = [];

    for (let i = 0; i < 50; i++) {
      const logo = logos[Math.floor(Math.random() * logos.length)];
      combined.push({
        id: i,
        ...logo,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        rotate: `${Math.random() * 360}deg`,
        delay: `${Math.random() * 5}s`,
      });
    }

    return combined;
  }, []);

  return (
    <div className="relative bg-zinc-900 min-h-screen flex justify-center items-center px-4 py-8 text-white font-sans overflow-hidden">
      {/* 🪐 Floating Background Logos */}
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

      {/* 🧱 Login Box */}
      <div
        className="relative rounded-[0.95rem] p-6 w-full max-w-sm flex flex-col gap-4
        bg-zinc-800/30 backdrop-blur-md shadow-inner ring-1 ring-white/5 overflow-hidden border-2 z-10"
        style={{
          borderColor: "#fdf6ee",
          boxShadow: isHovered ? "0 0 10px #fdf6ee" : "0 0 0px transparent",
          transition: "box-shadow 250ms ease-in-out",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h1 className="text-xl font-semibold text-center mb-2">Log in to Cryptfie</h1>

        <input
          type="email"
          placeholder="Email address"
          className="bg-zinc-900 text-white border border-zinc-700 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fdf6ee]"
        />

        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition-colors">
          Log in with Email
        </button>

        <div className="text-center text-gray-400 text-sm">or</div>

        <button className="bg-zinc-800 hover:bg-zinc-700 text-white py-2 rounded-md font-medium transition-colors border border-zinc-600">
          Connect Wallet
        </button>

        <p className="text-xs text-gray-400 text-center mt-4">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Create one
          </a>
        </p>
      </div>
    </div>
  );
}
