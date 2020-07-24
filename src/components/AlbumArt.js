import React from "react";
import StoreContext from "../containers/StoreContext";

export default function AlbumArt({ className }) {
  const store = React.useContext(StoreContext);
  let albumArt = store.nowPlaying.albumArt;
    return (
      <div className={`${className}`}>
        {albumArt !== "" && (
          <img
            src={`data:image/jpeg;base64,${albumArt}`}
            className="rounded-lg shadow-md max-w-full"
          ></img>
        )}
      </div>
    );
}
