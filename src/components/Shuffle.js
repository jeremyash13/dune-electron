import React from "react";
import StoreContext from "../containers/StoreContext";
import { useObserver } from "mobx-react";

export default function Shuffle() {
  const store = React.useContext(StoreContext);

  return useObserver(() => (
    <div
      className={`${
        store.shuffle ? "text-horizon-red" : ""
      } w-6 cursor-pointer`}
      onClick={() => {
        store.setShuffle(!store.shuffle);
      }}
    >
      <svg
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 50 50"
        fill="currentColor"
      >
        <g id="Layer_1">
          <path
            d="M9.465,37.95l8.242-8.243l-1.414-1.414l-8.242,8.242C7.105,37.48,5.85,38,4.515,38H1v2h3.515
		C6.384,40,8.142,39.272,9.465,37.95z"
          />
          <path
            d="M32.535,12.05l-8.242,8.243l1.414,1.414l8.242-8.242C34.895,12.52,36.15,12,37.485,12h6.101l-4.293,4.293l1.414,1.414
		L47.414,11l-6.707-6.707l-1.414,1.414L43.586,10h-6.101C35.616,10,33.858,10.728,32.535,12.05z"
          />
          <path
            d="M8.051,13.464L32.535,37.95c1.323,1.322,3.081,2.05,4.95,2.05h6.101l-4.293,4.293l1.414,1.414L47.414,39l-6.707-6.707
		l-1.414,1.414L43.586,38h-6.101c-1.335,0-2.591-0.52-3.536-1.464L9.465,12.05C8.142,10.728,6.384,10,4.515,10H1v2h3.515
		C5.85,12,7.105,12.52,8.051,13.464z"
          />
        </g>
      </svg>
    </div>
  ));
}
