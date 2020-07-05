import React from "react";

export default function Marquee({ children }) {
  return (
    <div className="">
      <div className="marquee text-lg font-normal text-horizon-red text-glow-red-2">{children}</div>
      {/* <div className="marquee-2 text-horizon-red text-glow-red-2">{children}</div> */}
    </div>
  );
}
