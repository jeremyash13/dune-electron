import React, { useState } from "react";

export default function SongContextMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen ? (
        <div className="absolute flyout border border-gray-700 z-50 transform -translate-x-8 opacity-0 bg-horizon-gray w-48 py-2 px-4 rounded text-right">
          <div className="">+ Playlist</div>
          <div className="">+ Queue</div>
        </div>
      ) : (
        <div className="absolute transform -translate-x-10 -translate-y-1 bg-black px-2" onClick={() => {setIsOpen(true)}}>
          <div className="text-xl">+</div>
        </div>
      )}
    </>
  );
}
