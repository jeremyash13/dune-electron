import React, { useEffect } from "react";
import PlayPause from "./PlayPause";
import SkipBack from "./SkipBack";
import SkipForward from "./SkipForward";
import ProgressBar from "./ProgressBar";
import Volume from "./Volume";
import QueueModifierControls from "./QueueModifierControls";

export default function PlayBar() {
  return (
    <>
      <div className="fixed mx-auto bottom-0 left-0 right-0 w-95/100 h-32">
          <div className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <SkipBack className="my-auto ml-auto" />
            <PlayPause />
            <SkipForward className="my-auto mr-auto" />
          </div>
          <QueueModifierControls />
          <ProgressBar />
          <Volume />
      </div>
    </>
  );
}
