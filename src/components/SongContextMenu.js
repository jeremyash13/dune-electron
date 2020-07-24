import React, { useState } from "react";

export default function SongContextMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen ? (
        <div className="absolute text-base flyout border border-gray-700 z-10 transform -translate-x-8 opacity-0 bg-horizon-gray w-40 py-2 px-4 rounded text-right">
          <div className="p-1">+ Playlist</div>
          <div className="p-1">+ Queue</div>
        </div>
      ) : (
        <div
          className="absolute w-5 h-5 text-horizon-gray transform -translate-x-10 bg-transparent"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <div className="w-full m-auto">
            <svg
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 384 384"
              className="h-full"
              fill="currentColor"
            >
              <g>
                <g>
                  <circle cx="192" cy="42.667" r="42.667" />
                </g>
              </g>
              <g>
                <g>
                  <circle cx="192" cy="192" r="42.667" />
                </g>
              </g>
              <g>
                <g>
                  <circle cx="192" cy="341.333" r="42.667" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      )}
    </>
  );
}
