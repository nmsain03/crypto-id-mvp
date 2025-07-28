// Landing.jsx
import { useMemo } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Landing() {
  const floatingLogos = useMemo(() => {
    const logos = [
      { src: "/btclogo.png", alt: "BTC", size: 32 },
      { src: "/ethlogo.png", alt: "ETH", size: 32 },
      { src: "/sologo.png", alt: "SOL", size: 42 },
    ];

    return Array.from({ length: 50 }, (_, i) => {
      const logo = logos[Math.floor(Math.random() * logos.length)];
      return {
        id: i,
        ...logo,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        rotate: `${Math.random() * 360}deg`,
        delay: `${Math.random() * 5}s`,
      };
    });
  }, []);

  return (
    <div className="relative bg-zinc-900 min-h-screen flex justify-center items-center px-4 py-8 text-white font-sans overflow-hidden">
      {/* 👇 Logo oben links */}
      <img
        src="/logo.png"
        alt="Cryptfie Logo"
        className="absolute top-6 left-6 w-10 md:w-12 z-20"
      />

      {/* Hintergrundlogos */}
      {floatingLogos.map(({ src, alt, left, top, rotate, delay, size }, index) => {
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

      {/* Inhalt */}
      <div className="relative z-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome to Cryptfie</h1>
        <p className="text-sm md:text-base text-gray-400 mb-6">
          One Link. All your crypto adresses. Connect to get started.
        </p>

        <ConnectWallet
          theme="dark"
          btnTitle="Connect Wallet"
          modalTitle="Connect Wallet"
          modalSize="wide"
          modalTitleIconUrl=""
          className="z-10"
        />
      </div>
    </div>
  );
}
