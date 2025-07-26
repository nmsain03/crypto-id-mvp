import { useState } from "react";
import QRCode from "react-qr-code";

function WalletCard({ chain, address }) {
  const [isHovered, setIsHovered] = useState(false);

  const backgroundImages = {
    Bitcoin: "/btc.png",
    Ethereum: "/eth.png",
    Solana: "/sol.png",
  };

  const borderColors = {
    Ethereum: "#3b82f6",
    Bitcoin: "#f7931a",
    Solana: "#00ffa3",
  };

  const pattern = backgroundImages[chain] || "";
  const shadowColor = borderColors[chain];

  return (
    <div
      className="relative rounded-[0.95rem] p-4 flex justify-between items-center h-32
        bg-zinc-800/30 backdrop-blur-md shadow-inner ring-1 ring-white/5 overflow-hidden
        transition-shadow duration-10000 ease-in-out border-2"
      style={{
        borderColor: shadowColor,
        boxShadow: isHovered
          ? `0 0 10px ${shadowColor}`
          : `0 0 0px transparent`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Pattern-Hintergrund */}
      {pattern && (
        <div
          className="absolute inset-0 z-0 opacity-10 bg-repeat"
          style={{
            backgroundImage: `url("${pattern}")`,
            backgroundSize: chain === "Solana" ? "400px 400px" : "300px 300px",
            animation: "scroll-diagonal 30s linear infinite",
            filter: "blur(4px)",
          }}
        />
      )}

      {/* Inhalt */}
      <div className="flex flex-col justify-center relative z-10">
        <p className="font-medium text-[#fdf6ee]">{chain}</p>
        <p className="text-xs break-all text-gray-300">{address}</p>
        <button
          className="mt-2 text-xs transition-all duration-200 inline w-fit leading-none"
          onClick={() => navigator.clipboard.writeText(address)}
          style={{
            color: shadowColor,
            textShadow: "none",
          }}
          onMouseEnter={(e) => {
            e.target.style.textShadow = `0 0 6px ${shadowColor}`;
          }}
          onMouseLeave={(e) => {
            e.target.style.textShadow = "none";
          }}
        >
          Copy address
        </button>
      </div>

      <div className="bg-black p-2 rounded-md flex items-center justify-center h-20 w-20 relative z-10">
        <QRCode
          value={address}
          style={{ height: "64px", width: "64px" }}
          bgColor="#000000"
          fgColor="#ffffff"
        />
      </div>
    </div>
  );
}




export default function App() {
  const [wallets] = useState([
    { chain: "Ethereum", address: "0x1234...abcd" },
    { chain: "Solana", address: "So1anaAddre5sHere" },
    { chain: "Bitcoin", address: "1BitcoinAddressXYZ" },
  ]);

  return (
    <div className="bg-zinc-900 min-h-screen flex justify-center items-center px-4 py-8 text-white font-sans">
      <div className="w-full max-w-md flex flex-col items-center gap-4">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-24 h-24 rounded-full border border-[#fdf6ee] object-cover shadow-[0_0_8px_#fdf6ee]"
        />
        <h1 className="text-2xl font-semibold text-white">@polina</h1>
        <p className="text-sm text-gray-400 text-center">
          The Real Pink | Accepting crypto donations 💸
        </p>
        <div className="w-full space-y-4 mt-4">
          {wallets.map((w) => (
            <WalletCard key={w.chain} {...w} />
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-gray-500">
          Always double-check the URL. This is my only crypto profile.
        </p>
      </div>
    </div>
  );
}
