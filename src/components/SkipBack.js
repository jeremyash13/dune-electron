import React from "react";
import StoreContext from "../containers/StoreContext";

export default function SkipBack({ className }) {
  const store = React.useContext(StoreContext);
  return (
    <div
      className={`${className} w-6 h-6 transform rotate-180 cursor-pointer text-gray-700 hover:text-white transition-colors duration-300 ease-in-out`}
      onClick={() => {
        store.prevSong()
      }}
    >
      <svg
        className="h-full w-full mx-auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="rgba(0,0,0,0)"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="5 4 15 12 5 20 5 4"></polygon>
        <line x1="19" y1="5" x2="19" y2="19"></line>
      </svg>
    </div>
  );
}
