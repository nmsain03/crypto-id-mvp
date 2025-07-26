import { useState } from "react";

export default function LoginCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-[0.95rem] p-6 w-full max-w-sm
      bg-zinc-800/30 backdrop-blur-md shadow-inner ring-1 ring-white/5 overflow-hidden border-2
      transition-shadow duration-[250ms] ease-in-out"
      style={{
        borderColor: "#fdf6ee",
        boxShadow: isHovered
          ? "0 0 10px #fdf6ee"
          : "0 0 0px transparent",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-white text-xl font-semibold text-center mb-4">Log in to Cryptfie</h2>

      <input
        type="text"
        placeholder="Email or Wallet"
        className="w-full px-4 py-2 rounded bg-zinc-900 text-white border border-white/10 placeholder-gray-400"
      />

      <button
        className="mt-4 w-full py-2 rounded bg-white text-black font-medium hover:opacity-90 transition"
      >
        Log in
      </button>

      <p className="mt-4 text-center text-sm text-gray-400">
        Don’t have an account? <span className="underline">Create one</span>
      </p>
    </div>
  );
}
