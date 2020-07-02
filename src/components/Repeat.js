import React from "react";
import StoreContext from "../containers/StoreContext";
import { useObserver } from "mobx-react";

export default function Repeat() {
  const store = React.useContext(StoreContext);

  return useObserver(() => (
    <div
      className="cursor-pointer ml-4 w-6"
      onClick={() => {
        if (store.repeat === 2) {
          store.setRepeat(0);
        } else {
          store.setRepeat(store.repeat + 1);
        }
      }}
    >
      {store.repeat === 0 && (
        // NO REPEAT
        <div id="repeat-icon">
          <svg id="repeat-icon" width="22px" viewBox="0 0 18 20" version="1.1">
            <g
              id="Icons"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g id="Two-Tone" transform="translate(-885.000000, -952.000000)">
                <g id="AV" transform="translate(100.000000, 852.000000)">
                  <g
                    id="Two-Tone-/-AV-/-repeat"
                    transform="translate(782.000000, 98.000000)"
                  >
                    <g>
                      <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                      <path
                        d="M7,22 L7,19 L19,19 L19,13 L17,13 L17,17 L7,17 L7,14 L3,18 L7,22 Z M21,6 L17,2 L17,5 L5,5 L5,11 L7,11 L7,7 L17,7 L17,10 L21,6 Z"
                        id="🔹-Primary-Color"
                        fill="currentColor"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      )}
      {store.repeat === 1 && (
        // REPEAT
        <div id="repeat-icon" className="text-horizon-red w-6">
          <svg id="repeat-icon" width="22px" viewBox="0 0 18 20" version="1.1">
            <g
              id="Icons"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g id="Two-Tone" transform="translate(-885.000000, -952.000000)">
                <g id="AV" transform="translate(100.000000, 852.000000)">
                  <g
                    id="Two-Tone-/-AV-/-repeat"
                    transform="translate(782.000000, 98.000000)"
                  >
                    <g>
                      <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                      <path
                        d="M7,22 L7,19 L19,19 L19,13 L17,13 L17,17 L7,17 L7,14 L3,18 L7,22 Z M21,6 L17,2 L17,5 L5,5 L5,11 L7,11 L7,7 L17,7 L17,10 L21,6 Z"
                        id="🔹-Primary-Color"
                        fill="currentColor"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      )}
      {store.repeat === 2 && (
        // REPEAT ONE
        <div id="repeat-icon" className="text-horizon-red w-6">
          <svg viewBox="0 0 18 20" width="22px" version="1.1">
            <g
              id="Icons"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g id="Two-Tone" transform="translate(-851.000000, -952.000000)">
                <g id="AV" transform="translate(100.000000, 852.000000)">
                  <g
                    id="Two-Tone-/-AV-/-repeat_one"
                    transform="translate(748.000000, 98.000000)"
                  >
                    <g>
                      <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                      <path
                        d="M13,15 L13,9 L12,9 L10,10 L10,11 L11.5,11 L11.5,15 L13,15 Z M19,13 L17,13 L17,17 L7,17 L7,14 L3,18 L7,22 L7,19 L19,19 L19,13 Z M17,2 L17,5 L5,5 L5,11 L7,11 L7,7 L17,7 L17,10 L21,6 L17,2 Z"
                        id="🔹-Primary-Color"
                        fill="currentColor"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      )}
    </div>
  ));
}
