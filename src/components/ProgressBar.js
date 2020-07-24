import React from "react";
import { useObserver } from "mobx-react";
import StoreContext from "../containers/StoreContext";

export default function ProgressBar() {
  const store = React.useContext(StoreContext);
  let seekPosition = [];
  for (let i = 0; i < 100; i++) {
    seekPosition.push(i);
  }
  return useObserver(() => (
    <div className="pr-16">
      <div id="progress-track" className="w-full relative h-5px bg-horizon-gray rounded">
        <div
          id="seek-overlay"
          className="flex bg-transparent absolute top-0 left-0 h-5px w-full cursor-pointer"
          onClick={(e) => {
            const newPosition =
              (parseFloat(e.target.id) / 100) * store.nowPlaying.duration;
            store.setPosition(newPosition);
          }}
        >
          {seekPosition.map((item, index) => (
            <div key={index} id={index} className="w-1/100 h-full"></div>
          ))}
        </div>
        {store.nowPlaying.duration !== "" && (
          <div
            id="progress-position"
            className="h-full progress-gradient rounded transition-all duration-200"
            style={{
              width: `${(store.position / store.nowPlaying.duration) * 100}%`,
            }}
          ></div>
        )}
      </div>

      <div id="time-wrapper" className="flex justify-between mt-4">
        <div id="remaining-duration">
          {new Date(1 * store.position)
            .toISOString()
            .substr(11, 8)
            .replace("00:", "")}
        </div>
        <div id="total-duration">
          {new Date(1 * store.nowPlaying.duration)
            .toISOString()
            .substr(11, 8)
            .replace("00:", "")}
        </div>
      </div>
    </div>
  ));
}
