import React from "react";
import StoreContext from "../containers/StoreContext";
import AudioWavesMini from "./AudioWavesMini";

export default function SongNowPlaying() {
  const store = React.useContext(StoreContext);
  return (
    <div className="mt-2 tracking-wider">
      <div className="flex justify-between">
        <div className="text-lg font-normal text-horizon-red text-glow-red">
          {store.queue[store.queueIndex].title}
        </div>
        <AudioWavesMini className="waves-active text-horizon-red" />
      </div>
      <div className="text-gray-600">
        {store.queue[store.queueIndex].artist}
      </div>
    </div>
  );
}
