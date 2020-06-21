import React from "react";

export default function AudioWavesMini({ className }) {
  return (
    <div className={`w-4 opacity-0 inline-block ml-2 transform translate-y-1 ${className}`}>
      <svg
        viewBox="0 -30 512 512"
        xmlns="http://www.w3.org/2000/svg"
        className="m-auto"
      >
        <path
          fill="currentColor"
          d="m0 160h40v132h-40zm79 212h40v-292h-40zm78 80h40v-452h-40zm78-160h40v-132h-40zm79 110h40v-352h-40zm158-242v142h40v-142zm-79 292h40v-452h-40zm0 0"
        />
      </svg>
    </div>
  );
}
