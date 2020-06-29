import React from "react";
import StoreContext from "../containers/StoreContext";
import { useObserver } from "mobx-react";

export default function PlayPause() {
  const store = React.useContext(StoreContext);

  return useObserver(() => (
    <>
      {store.playStatus === "PLAYING" && (
        <div
          className="bg-horizon-gray my-auto mx-6 text-2xl w-12 h-12 rounded-full relative cursor-pointer text-gray-700 hover:text-white transition-colors duration-300 ease-in-out"
          onClick={() => {
            store.pause();
          }}
        >
          <div
            id="PAUSE"
            className={`w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
          >
            <svg
              className="h-full mx-auto"
              viewBox="0 0 6 8"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-227.000000, -3765.000000)"
                  fill="currentColor"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M172,3605 C171.448,3605 171,3605.448 171,3606 L171,3612 C171,3612.552 171.448,3613 172,3613 C172.552,3613 173,3612.552 173,3612 L173,3606 C173,3605.448 172.552,3605 172,3605 M177,3606 L177,3612 C177,3612.552 176.552,3613 176,3613 C175.448,3613 175,3612.552 175,3612 L175,3606 C175,3605.448 175.448,3605 176,3605 C176.552,3605 177,3605.448 177,3606"
                      id="pause-[#1006]"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      )}
      {(store.playStatus === "STOPPED" ||
        store.playStatus === "PAUSED") && (
          <div
            className="bg-horizon-gray my-auto mx-6 text-2xl w-12 h-12 rounded-full relative cursor-pointer"
            onClick={() => {
              store.play();
            }}
          >
            <div
              id="PLAY"
              className={`w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-3 -translate-y-1/2 text-gray-700 hover:text-white transition-colors duration-300 ease-in-out`}
            >
              <svg
                className="h-full mx-auto"
                viewBox="0 0 11 14"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="Icons"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Rounded"
                    transform="translate(-753.000000, -955.000000)"
                  >
                    <g id="AV" transform="translate(100.000000, 852.000000)">
                      <g
                        id="-Round-/-AV-/-play_arrow"
                        transform="translate(646.000000, 98.000000)"
                      >
                        <g>
                          <rect
                            id="Rectangle-Copy-50"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          ></rect>
                          <path
                            d="M7,6.82 L7,17.18 C7,17.97 7.87,18.45 8.54,18.02 L16.68,12.84 C17.3,12.45 17.3,11.55 16.68,11.15 L8.54,5.98 C7.87,5.55 7,6.03 7,6.82 Z"
                            id="🔹Icon-Color"
                            fill="currentColor"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        )}
    </>
  ));
}
