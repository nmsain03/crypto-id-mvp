import { useState } from "react";
import QRCode from "react-qr-code";

function WalletCard({ chain, address }) {
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

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
        boxShadow: isHovered ? `0 0 10px ${shadowColor}` : "0 0 0px transparent",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
          className="mt-2 text-xs transition-all duration-200 inline w-fit leading-none"
          onClick={handleCopy}
          style={{
            color: shadowColor,
            textShadow: copied ? `0 0 6px ${shadowColor}` : "none",
          }}
          onMouseEnter={(e) => {
            if (!copied) e.target.style.textShadow = `0 0 6px ${shadowColor}`;
          }}
          onMouseLeave={(e) => {
            if (!copied) e.target.style.textShadow = "none";
          }}
        >
          {copied ? "Copied!" : "Copy address"}
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

export default function Dashboard() {
  const [wallets, setWallets] = useState([
    { chain: "", address: "" },
    { chain: "", address: "" },
    { chain: "", address: "" },
  ]);

  const handleAddWallet = () => {
    setWallets([...wallets, { chain: "", address: "" }]);
  };

  const updateWallet = (index, field, value) => {
    const newWallets = [...wallets];
    newWallets[index][field] = value;
    setWallets(newWallets);
  };

  const handleRemoveWallet = (index) => {
    setWallets(wallets.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-zinc-900 min-h-screen flex flex-col items-center px-4 py-8 text-white font-sans">
      <h1 className="text-2xl font-semibold mb-2">Hi [alias]!</h1>
      <div className="mb-4 flex gap-4">
        <button className="underline">🔁 Alias bearbeiten</button>
        <button className="underline">🖼 Profilbild hochladen</button>
      </div>
      <div className="w-full max-w-md space-y-4">
        {wallets.map((w, i) => (
          <div key={i} className="bg-zinc-800/20 p-4 rounded-xl flex flex-col gap-2">
            <select
              className="bg-zinc-900 border border-gray-600 rounded-md px-2 py-1 text-white"
              value={w.chain}
              onChange={(e) => updateWallet(i, "chain", e.target.value)}
            >
              <option value="">Choose Chain</option>
              <option value="Ethereum">Ethereum</option>
              <option value="Bitcoin">Bitcoin</option>
              <option value="Solana">Solana</option>
            </select>
            <input
              className="bg-zinc-900 border border-gray-600 rounded-md px-2 py-1 text-white"
              placeholder="Enter address"
              value={w.address}
              onChange={(e) => updateWallet(i, "address", e.target.value)}
            />
            <button
              className="text-sm text-red-400 underline self-end"
              onClick={() => handleRemoveWallet(i)}
            >
              🗑 Wallet entfernen
            </button>
          </div>
        ))}
        <button
          className="text-green-400 underline text-sm mt-4"
          onClick={handleAddWallet}
        >
          ➕ Wallet hinzufügen (Chain + Adresse)
        </button>
      </div>
      <p className="mt-8 text-center text-sm text-gray-500">
        Vorschau-Link: cryptfie.com/@alias
      </p>
    </div>
  );
}
