import React from "react";

export default function Marquee({ children }) {
  return (
    <div className="w-64">
      <div className="marquee w-full text-2xl font-euclid-semibold text-horizon-red text-glow-red-2">{children}</div>
    </div>
  );
}
