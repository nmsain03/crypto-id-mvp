// src/pages/Login.jsx
import { useState } from "react";

export default function Login() {
  return (
    <div className="bg-zinc-900 min-h-screen flex justify-center items-center px-4 py-8 text-white font-sans">
      <div
        className="bg-zinc-800/30 backdrop-blur-md shadow-inner ring-1 ring-white/5
        border-2 border-[#fdf6ee] transition-shadow duration-250 ease-in-out
        p-8 rounded-2xl w-full max-w-sm flex flex-col gap-4
        hover:shadow-[0_0_12px_#fdf6ee]"
      >
        <h1 className="text-center text-xl font-semibold text-white mb-2">
          Log in to Cryptfie
        </h1>

        <input
          type="email"
          placeholder="Email address"
          className="bg-zinc-900 text-white border border-zinc-700 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fdf6ee]"
        />

        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition-colors">
          Log in with Email
        </button>

        <div className="text-center text-gray-400 text-sm">or</div>

        <button className="bg-zinc-800 hover:bg-zinc-700 text-white py-2 rounded-md font-medium transition-colors border border-zinc-600">
          Connect Wallet
        </button>

        <p className="text-xs text-gray-400 text-center mt-4">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Create one
          </a>
        </p>
      </div>
    </div>
  );
}
