// src/pages/Login.jsx
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");

  const handleEmailLogin = () => {
    alert(`Logging in with email: ${email}`);
    // später: Supabase, Magic.link etc.
  };

  const handleWalletLogin = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        alert(`Wallet connected: ${accounts[0]}`);
      } catch (err) {
        alert("Error connecting wallet");
      }
    } else {
      alert("No wallet found. Please install MetaMask.");
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center text-white">
      <div className="w-full max-w-md p-6 rounded-xl bg-[#1a1a1a] shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-6">Log in to Cryptfie</h1>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 bg-[#2a2a2a] border border-[#333] rounded-lg focus:outline-none"
        />

        <button
          onClick={handleEmailLogin}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg mb-4 font-medium"
        >
          Log in with Email
        </button>

        <div className="text-center text-gray-500 my-3">or</div>

        <button
          onClick={handleWalletLogin}
          className="w-full py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium"
        >
          Connect Wallet
        </button>

        <p className="text-sm text-center mt-6 text-gray-400">
          Don’t have an account? <a href="#" className="text-blue-500 hover:underline">Create one</a>
        </p>
      </div>
    </div>
  );
}
