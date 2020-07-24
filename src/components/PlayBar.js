import React, { useEffect } from "react";
import PlayPause from "./PlayPause";
import SkipBack from "./SkipBack";
import SkipForward from "./SkipForward";
import ProgressBar from "./ProgressBar";
import Volume from "./Volume";
import QueueButton from "./QueueButton";
import Shuffle from "./Shuffle";
import Repeat from "./Repeat";

export default function PlayBar() {
  return (
    <>
      <div className="fixed mx-auto absolute bottom-0 w-full h-32 bg-horizon-black z-30">
        <ProgressBar />
        <div id="controls" className="flex justify-center w-full">
          <div className="flex text-gray-800 my-auto">
            <Shuffle />
            <Repeat />
          </div>
          <div className="flex space-x-4 mx-10">
            <SkipBack className="my-auto" />
            <PlayPause />
            <SkipForward className="my-auto" />
          </div>
          <div className="flex text-gray-800 space-x-4 mr-6">
            <QueueButton />
            <Volume />
          </div>
        </div>
      </div>
    </>
  );
}
