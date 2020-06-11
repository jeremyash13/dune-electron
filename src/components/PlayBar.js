import React, { useEffect } from "react";
import PlayPause from "./PlayPause";
import SkipBack from "./SkipBack";
import SkipForward from "./SkipForward";


export default function PlayBar() {
  
  return (
    <div className="mt-auto flex">
      <SkipBack className="my-auto ml-auto" />
      <PlayPause />
      <SkipForward className="my-auto mr-auto" />
    </div>
  );
}
