import React, { useEffect } from "react";
import PlayPause from "./PlayPause";
import SkipBack from "./SkipBack";
import SkipForward from "./SkipForward";
import ProgressBar from "./ProgressBar";

export default function PlayBar() {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 w-full h-64">
        <div id="gradient" className="fade h-32 w-full"></div>
        <div className="bg-dark-blue h-1/2">
          <div className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <SkipBack className="my-auto ml-auto" />
            <PlayPause />
            <SkipForward className="my-auto mr-auto" />
          </div>
          <ProgressBar />
        </div>
      </div>
    </>
  );
}
