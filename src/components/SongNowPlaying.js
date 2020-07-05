import React, { useRef, useEffect, useState } from "react";
import StoreContext from "../containers/StoreContext";
import AudioWavesMini from "./AudioWavesMini";
import Marquee from "./Marquee";
// import Ticker from "react-ticker";

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
        {/* <div
          ref={myRef}
          className={`${
            shouldScroll ? "scrolling-text-1" : ""
          } mr-32 text-lg font-normal text-horizon-red text-glow-red whitespace-no-wrap overflow-visible`}
        >
          {store.queue[store.queueIndex].title}
        </div> */}
        {store.queue[store.queueIndex].title.length >= 18 ? (
          <div className="w-full overflow-x-hidden">
            <Marquee>{store.queue[store.queueIndex].title}</Marquee>
            {/* <Ticker mode="chain">
              {() => (
                <div className="whitespace-no-wrap mr-20 text-lg font-normal text-horizon-red text-glow-red-2">
                  {store.queue[store.queueIndex].title}
                </div>
              )}
            </Ticker> */}
          </div>
        ) : (
          <div
            className={`mr-32 text-lg font-normal text-horizon-red text-glow-red whitespace-no-wrap overflow-visible`}
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
