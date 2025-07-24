import { useState } from "react";
import QRCode from "react-qr-code";

function WalletCard({ chain, address }) {
  return (
   <div className="border border-[#fdf6ee] rounded-2xl p-4 bg-zinc-800 flex justify-between items-center h-32 transition-shadow duration-300 hover:shadow-[0_0_12px_#fdf6ee]">
      <div className="flex flex-col justify-center">
        <p className="font-medium text-[#F24405]">{chain}</p>
        <p className="text-xs break-all text-gray-300">{address}</p>
        <button
          className="mt-2 text-xs text-blue-400 hover:underline text-left"
          onClick={() => navigator.clipboard.writeText(address)}
        >
          Copy address
        </button>
      </div>

      <div className="bg-black p-2 rounded-md flex items-center justify-center h-20 w-20">
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
          src="https://placehold.co/100x100"
          alt="Profile"
          className="rounded-full border border-gray-500"
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
