import React, { useRef, useEffect, useState } from "react";
import StoreContext from "../containers/StoreContext";
import AudioWavesMini from "./AudioWavesMini";
import Marquee from "./Marquee";

export default function SongNowPlaying() {
  const store = React.useContext(StoreContext);
  // const shouldScroll = useState(false);
  // const containerRef = useRef();
  // useEffect(() => {
  //   console.log(containerRef.current.scrollWidth);\
  //   if (containerRef.current.scrollWidth) {
  //     // scroll
  //   }
  // }, [store.queueIndex]);

  return (
    <div className="mt-2 tracking-wider">
      <div className="flex justify-between">
        {store.queue[store.queueIndex].title.length >= 13 ? (
          <div className="w-full overflow-x-hidden">
            <Marquee>{store.queue[store.queueIndex].title}</Marquee>
          </div>
        ) : (
          <div
            className={`mr-32 text-2xl font-euclid-semibold text-horizon-red text-glow-red whitespace-no-wrap overflow-visible`}
          >
            {store.queue[store.queueIndex].title}
          </div>
        )}
        <AudioWavesMini className="waves-active text-horizon-red" />
      </div>
      <div className="text-gray-600">
        {store.queue[store.queueIndex].artist}
      </div>
    </div>
  );
}
