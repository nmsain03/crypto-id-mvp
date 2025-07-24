import { useState } from "react";
import QRCode from "react-qr-code";

function WalletCard({ chain, address }) {
  return (
  <div className="bg-white min-h-screen flex justify-center items-center px-4 py-8 text-gray-900 font-sans">
    <div className="w-full max-w-md flex flex-col items-center gap-4">
      <img
        src="https://placehold.co/100x100"
        alt="Profile"
        className="rounded-full border border-gray-300"
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
  </div>
);
  
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
