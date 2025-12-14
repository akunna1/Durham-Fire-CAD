"use client";

import { useState } from "react";

export default function Navbar() {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <nav className="w-full py-5 flex items-center justify-end px-6 border-b border-gray-800">
      <button
        onClick={() => setIsRunning(!isRunning)}
        className="bg-red-600 hover:bg-red-800 px-4 py-2 rounded-md text-sm font-bold transition-transform duration-200 hover:-translate-y-1"
      >
        {isRunning ? "End CAD" : "Run CAD"}
      </button>
    </nav>
  );
}
