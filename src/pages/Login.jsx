import { useState, useMemo } from "react";

export default function Login() {
  const [isHovered, setIsHovered] = useState(false);

  const floatingLogos = useMemo(() => {
    const logos = [
      { src: "/btclogo.png", alt: "BTC", size: 32 },
      { src: "/ethlogo.png", alt: "ETH", size: 32 },
      { src: "/sologo.png", alt: "SOL", size: 42 }, // SOL größer
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
    BTC: "rgba(247, 147, 26, 0.3)",     // orange
    ETH: "rgba(59, 130, 246, 0.3)",     // blau
    SOL: "rgba(0, 255, 163, 0.2)",      // grünlich
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
