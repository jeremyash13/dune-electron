import React, { useRef, useEffect, useState } from "react";
import StoreContext from "../containers/StoreContext";
import AudioWavesMini from "./AudioWavesMini";
import Marquee from "./Marquee";

export default function SongNowPlaying() {
  const store = React.useContext(StoreContext);

  return (
    <div className="mt-2 tracking-wider">
      <div className="flex justify-between">
        {store.nowPlaying.title.length >= 13 ? (
          <div className="w-full overflow-x-hidden">
            <Marquee>{store.nowPlaying.title}</Marquee>
          </div>
        ) : (
          <div
            className={`mr-32 text-2xl font-euclid-semibold text-horizon-red text-glow-red whitespace-no-wrap overflow-visible`}
          >
            {store.nowPlaying.title}
          </div>
        )}
        <AudioWavesMini className="waves-active text-horizon-red filter-glow-red w-6" />
      </div>
      <div className="text-gray-600">
        {store.nowPlaying.artist}
      </div>
    </div>
  );
}
