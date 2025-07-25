function WalletCard({ chain, address }) {
  const backgroundImages = {
    Bitcoin: "/btc.png",
    Ethereum: "/eth.png",
    Solana: "/sol.png",
  };

  const pattern = backgroundImages[chain] || "";

  const borderColors = {
    Ethereum: "#3b82f6",
    Bitcoin: "#f7931a",
  };

  const textColors = {
    Ethereum: "#3b82f6",
    Bitcoin: "#f7931a",
    Solana: "#00ffa3", // optional
  };

  const isGradient = chain === "Solana";

  return (
    <div
      className="rounded-2xl p-[2px]"
      style={{
        background: isGradient
          ? "linear-gradient(90deg, #00ffa3, #dc1fff)"
          : borderColors[chain],
      }}
    >
      <div
        className="relative rounded-[0.95rem] p-4 flex justify-between items-center h-32
        bg-zinc-800/30 backdrop-blur-md shadow-inner ring-1 ring-white/5
        transition-shadow duration-200 hover:shadow-[0_0_5px_#fdf6ee] overflow-hidden"
      >
        {pattern && (
          <div
            className="absolute inset-0 z-0 opacity-10 bg-repeat"
            style={{
              backgroundImage: `url("${pattern}")`,
              backgroundSize: chain === "Solana" ? "400px 400px" : "300px 300px",
              animation: "scroll-diagonal 30s linear infinite",
              filter: "blur(4px)",
            }}
          ></div>
        )}

        <div className="flex flex-col justify-center relative z-10">
          <p className="font-medium text-[#fdf6ee]">{chain}</p>
          <p className="text-xs break-all text-gray-300">{address}</p>
          <button
            className="mt-2 text-xs transition-all duration-200 inline w-fit leading-none"
            onClick={() => navigator.clipboard.writeText(address)}
            style={{
              color: isGradient ? "#00ffa3" : textColors[chain],
              textShadow: "none",
            }}
            onMouseEnter={(e) => {
              e.target.style.textShadow = `0 0 6px ${isGradient ? "#00ffa3" : textColors[chain]}`;
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
    </div>
  );
}
