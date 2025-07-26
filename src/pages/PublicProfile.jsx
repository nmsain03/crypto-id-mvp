// src/pages/PublicProfile.jsx
import { useState } from "react";
import QRCode from "react-qr-code";

function WalletCard({ chain, address }) {
  // 💯 Deine gesamte Card-Funktion bleibt hier drin, unverändert!
}

export default function PublicProfile() {
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
