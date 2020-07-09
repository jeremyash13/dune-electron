import React from "react";

export default function Marquee({ children }) {
  return (
    <div className="">
      <div className="marquee text-2xl font-euclid-semibold text-horizon-red text-glow-red-2">{children}</div>
      {/* <div className="marquee-2 text-horizon-red text-glow-red-2">{children}</div> */}
    </div>
  );
}
