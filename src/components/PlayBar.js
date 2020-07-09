import React, { useEffect } from "react";
import PlayPause from "./PlayPause";
import SkipBack from "./SkipBack";
import SkipForward from "./SkipForward";
import ProgressBar from "./ProgressBar";
import Volume from "./Volume";
import QueueModifierControls from "./QueueModifierControls";
import Queue from "./Queue";
import Shuffle from "./Shuffle";
import Repeat from "./Repeat";

export default function PlayBar() {
  return (
    <>
      <div className="fixed mx-auto absolute bottom-0 w-95/100 h-32">
        <ProgressBar />
        <div id="controls" className="flex justify-center w-full">
          <div className="flex text-gray-800 my-auto ml-10">
            <Shuffle />
            <Repeat />
          </div>
          <div className="flex space-x-4 mx-10">
            <SkipBack className="my-auto" />
            <PlayPause />
            <SkipForward className="my-auto" />
          </div>
          <div className="flex space-x-4">
            <Queue />
            <Volume />
          </div>
        </div>
      </div>
    </>
  );
}
