import { useState } from "react";
import QRCode from "react-qr-code";

function WalletCard({ chain, address }) {
  return (
    <div className="border border-gray-200 rounded-2xl p-4 shadow-sm">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-medium text-pink-600">{chain}</p>
          <p className="text-xs break-all text-gray-600">{address}</p>
        </div>
        <QRCode value={address} style={{ height: "64px", maxWidth: "100%", width: "64px" }} />
      </div>
      <button
        className="mt-2 text-xs text-blue-600 hover:underline"
        onClick={() => navigator.clipboard.writeText(address)}
      >
        Copy address
      </button>
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
    <div className="max-w-md mx-auto min-h-screen flex flex-col items-center gap-4">
      <img
        src="https://placehold.co/100x100"
        alt="Profile"
        className="rounded-full border border-gray-300 mt-6"
      />
      <h1 className="text-2xl font-semibold">@julia</h1>
      <p className="text-sm text-gray-500 text-center">
        Street Artist | Accepting crypto donations 💸
      </p>
      <div className="w-full space-y-4 mt-4">
        {wallets.map((w) => (
          <WalletCard key={w.chain} {...w} />
        ))}
      </div>
      <p className="mt-8 text-center text-xs text-gray-400">
        Always double-check the URL. This is my only crypto profile.
      </p>
    </div>
  );
}
