import { useState } from "react";
import { Copy } from "lucide-react";

export default function Dashboard() {
  const [wallets, setWallets] = useState([
    { chain: "Bitcoin", address: "bc1qexampleaddress1234" },
    { chain: "Ethereum", address: "0xexampleaddress5678" },
    { chain: "Solana", address: "solanaExampleAddress" },
  ]);

  const user = {
    alias: "@cryptqueen",
    bio: "Building the future of crypto identity.",
    socials: {
      twitter: "https://twitter.com/yourhandle",
      website: "https://cryptfie.com",
    },
  };

  const borderColors = {
    Ethereum: "#3b82f6",
    Bitcoin: "#f7931a",
    Solana: "#00ffa3",
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen px-4 py-10 bg-black text-white font-sans">
      {/* Header */}
      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Welcome, {user.alias}</h1>
        <div className="w-10 h-10 bg-gray-800 rounded-full" />
      </header>

      {/* Profilbereich */}
      <section className="mb-10 p-6 bg-white/5 rounded-2xl backdrop-blur border border-white/10">
        <h2 className="text-xl font-semibold mb-4">Profil</h2>
        <p><span className="font-medium text-gray-400">Alias:</span> {user.alias}</p>
        <p><span className="font-medium text-gray-400">Bio:</span> {user.bio}</p>
        <p><span className="font-medium text-gray-400">Links:</span> 
          <a href={user.socials.twitter} className="text-blue-400 hover:underline ml-1" target="_blank" rel="noopener noreferrer">Twitter</a>, 
          <a href={user.socials.website} className="text-blue-400 hover:underline ml-1" target="_blank" rel="noopener noreferrer">Website</a>
        </p>
      </section>

      {/* Wallet Cards */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Deine Wallets</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {wallets.map((wallet, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl border relative bg-white/5 backdrop-blur border-white/10"
              style={{ borderColor: borderColors[wallet.chain] }}
            >
              <div className="mb-2 text-lg font-medium">{wallet.chain}</div>
              <div className="text-sm break-all">{wallet.address}</div>
              <button
                onClick={() => copyToClipboard(wallet.address)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <Copy size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Wallet hinzufügen */}
        <div className="mt-6">
          <button className="px-4 py-2 rounded-xl bg-turquoise-500 text-black font-semibold hover:bg-turquoise-400 transition">
            ➕ Wallet hinzufügen
          </button>
        </div>
      </section>
    </div>
  );
}
