"use client";

import Navbar from "./components/Navbar";
import dynamic from "next/dynamic";

// Dynamic import for DispatchMap (Leaflet requires browser)
const DispatchMap = dynamic(() => import("./components/DispatchMap"), { ssr: false });

export default function HomePage() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1">
        <DispatchMap />
      </div>
    </div>
  );
}
