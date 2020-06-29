import React from "react";
import NowPlaying from "./NowPlaying";

export default function LeftPane() {
  return (
    <div className="w-48 flex flex-col">
      <NowPlaying />
    </div>
  );
}
