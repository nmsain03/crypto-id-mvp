// src/pages/Dashboard.jsx
import { useState } from "react";
import QRCode from "react-qr-code";

const chains = ["Ethereum", "Bitcoin", "Solana"];

function WalletCard({ chain, address, onRemove }) {
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
        transition-shadow duration-250 ease-in-out border-2"
      style={{
        borderColor: shadowColor,
        boxShadow: `0 0 10px ${shadowColor}`,
      }}
    >
      {pattern && (
        <div
          className="absolute inset-0 z-0 opacity-10 bg-repeat"
          style={{
            backgroundImage: `url(${pattern})`,
            backgroundSize: chain === "Solana" ? "400px 400px" : "300px 300px",
            animation: "scroll-diagonal 30s linear infinite",
            filter: "blur(4px)",
          }}
        />
      )}

      <div className="flex flex-col justify-center relative z-10">
        <p className="font-medium text-[#fdf6ee]">{chain}</p>
        <p className="text-xs break-all text-gray-300">{address}</p>
        <button
          className="mt-2 text-xs text-red-400 hover:text-red-200"
          onClick={onRemove}
        >
          Remove
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

function EmptyWalletCard({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative rounded-[0.95rem] h-32 w-full border-2 border-green-400 border-dashed flex items-center justify-center text-green-400 text-xl font-semibold hover:bg-green-400/10 transition"
    >
      ➕ Add Wallet
    </button>
  );
}

export default function Dashboard() {
  const [alias, setAlias] = useState("cryptqueen");
  const [wallets, setWallets] = useState([]);
  const [newChain, setNewChain] = useState("Ethereum");
  const [newAddress, setNewAddress] = useState("");
  const [addingIndex, setAddingIndex] = useState(null);

  const handleAdd = () => {
    if (!newAddress || !newChain) return;
    setWallets([...wallets, { chain: newChain, address: newAddress }]);
    setNewAddress("");
    setAddingIndex(null);
  };

  const handleRemove = (idx) => {
    const newList = [...wallets];
    newList.splice(idx, 1);
    setWallets(newList);
  };

  return (
    <div className="bg-zinc-900 min-h-screen flex justify-center items-center px-4 py-8 text-white font-sans">
      <div className="w-full max-w-md flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">Hi @{alias}!</h1>

        <input
          type="text"
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
          className="bg-zinc-800 p-2 rounded mt-2 text-white w-full text-center"
          placeholder="Edit alias"
        />

        <div className="w-full space-y-4 mt-6">
          {wallets.map((w, idx) => (
            <WalletCard
              key={idx}
              {...w}
              onRemove={() => handleRemove(idx)}
            />
          ))}

          <EmptyWalletCard onClick={() => setAddingIndex(wallets.length)} />

          {addingIndex === wallets.length && (
            <div className="bg-zinc-800 p-4 rounded-xl space-y-2">
              <select
                value={newChain}
                onChange={(e) => setNewChain(e.target.value)}
                className="bg-zinc-700 text-white w-full p-2 rounded"
              >
                {chains.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              <input
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
                placeholder="Enter wallet address"
                className="bg-zinc-700 text-white w-full p-2 rounded"
              />
              <button
                onClick={handleAdd}
                className="w-full p-2 bg-green-400 text-black rounded hover:bg-green-300"
              >
                ✅ Confirm
              </button>
            </div>
          )}
        </div>

        <p className="mt-8 text-center text-xs text-gray-500">
          Preview: cryptfie.com/@{alias}
        </p>
      </div>
    </div>
  );
}
