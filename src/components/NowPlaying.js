import React from "react";
import AlbumArt from "./AlbumArt";
import SongNowPlaying from "./SongNowPlaying";

export default function NowPlaying() {
  return (
    <div className="mt-auto">
      <AlbumArt />
      <SongNowPlaying />
    </div>
  );
}
