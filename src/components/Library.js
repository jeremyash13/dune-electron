import React from "react";
import { useObserver } from "mobx-react";
import StoreContext from "../containers/StoreContext";

const { ipcRenderer } = window.require("electron");

export default function Library() {
  const store = React.useContext(StoreContext);

  const playSong = (e) => {
    const index = e.target.getAttribute("index");
    store.currentSong = ipcRenderer.sendSync(
      "playSong",
      JSON.stringify(store.songLibrary[index])
    );
  };

  return useObserver(() => (
    <div className="max-w-2xl">
      <table className="w-full">
        <tbody>
          <tr>
            <th className="font-light cursor-pointer">Title</th>
            <th className="font-light cursor-pointer">Artist</th>
            <th className="font-light cursor-pointer">Album</th>
            <th className="font-light cursor-pointer">Added</th>
            <th className="font-light cursor-pointer">Duration</th>
          </tr>
          {store.songLibrary.map((song, index) => (
            <tr
              key={song.title + song.artist + song.added}
              className="font-thin text-center text-sm cursor-pointer hover:bg-gray-800 transition-colors duration-100 ease-in-out"
              index={index}
              onClick={(e) => {
                playSong(e);
              }}
            >
              <td className="p-2 rounded-l-md" index={index}>
                {song.title}
              </td>
              <td className="p-2" index={index}>
                {song.artist}
              </td>
              <td className="p-2" index={index}>
                {song.album}
              </td>
              <td className="p-2" index={index}>
                {song.added}
              </td>
              <td className="p-2 rounded-r-md" index={index}>
                {song.duration}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ));
}
