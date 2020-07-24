import React from "react";
import StoreContext from "../containers/StoreContext";
import { CSSTransition } from "react-transition-group";
import { useObserver } from "mobx-react";

export default function QueueWindow() {
  const store = React.useContext(StoreContext);

  return useObserver(() => (
    <CSSTransition
      in={store.showQueue}
      timeout={350}
      classNames="slide"
      unmountOnExit
    >
      <div
        id="queue-window"
        className="absolute bg-queue-window bottom-128px right-0 h-70% w-1/2 rounded-lg overflow-scroll overflow-x-hidden custom-scroll pr-2 mr-8 z-20"
      >
        {store.queue.items.map((song, index) => (
          <div
            id="queue-entry"
            className="flex h-20 p-4 border-b border-gray-700"
            key={index}
          >
            {song.albumArt !== "" && (
              <div className="cropped mr-4 rounded queue-overlay group relative h-full w-full cursor-pointer">
                <div
                  id="play-overlay"
                  className="bg-opacity-25 flex w-full h-full"
                >
                  <div className="w-5 pl-1 mx-auto my-auto">
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
                          <g
                            id="AV"
                            transform="translate(100.000000, 852.000000)"
                          >
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
                <img
                  src={`data:image/jpeg;base64,${song.albumArt}`}
                  className="absolute top-0 group-hover:opacity-50"
                ></img>
              </div>
            )}
            <div className="flex flex-col w-1/2">
              <div className="font-euclid-reg text-lg truncate">
                {song.title}
              </div>
              <div className="text-sm tracking-wider text-gray-600">
                {song.artist}
              </div>
            </div>
            <div className="ml-8 h-max-content my-auto">
              {new Date(1 * song.duration)
                .toISOString()
                .substr(11, 8)
                .replace("00:", "")}
            </div>
          </div>
        ))}
      </div>
    </CSSTransition>
  ));
}
