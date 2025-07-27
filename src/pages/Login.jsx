import { useState } from "react";

const logos = [
  { src: "/btclogo.png", alt: "BTC" },
  { src: "/ethlogo.png", alt: "ETH" },
  { src: "/sologo.png", alt: "SOL" },
];

const floatingLogos = Array.from({ length: 12 }, (_, i) => ({
  ...logos[i % logos.length],
  top: `${Math.random() * 90}%`,
  left: `${Math.random() * 90}%`,
  duration: `${10 + Math.random() * 10}s`,
  size: `${40 + Math.random() * 30}px`,
}));

export default function Login() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-zinc-900 min-h-screen flex justify-center items-center px-4 py-8 text-white font-sans relative overflow-hidden">
      {/* 🪐 Multiple Floating Logos */}
      {floatingLogos.map((logo, i) => (
        <img
          key={i}
          src={logo.src}
          alt={logo.alt}
          className="floating-logo pointer-events-none"
          style={{
            top: logo.top,
            left: logo.left,
            animationDuration: logo.duration,
            width: logo.size,
            height: logo.size,
          }}
        />
      ))}

      <div
        className="relative rounded-[0.95rem] p-6 w-full max-w-sm flex flex-col gap-4
        bg-zinc-800/30 backdrop-blur-md shadow-inner ring-1 ring-white/5 overflow-hidden border-2
        transition-shadow duration-[250ms] ease-in-out"
        style={{
          borderColor: "#fdf6ee",
          boxShadow: isHovered ? "0 0 10px #fdf6ee" : "0 0 0px transparent",
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
