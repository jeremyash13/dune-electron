import React from "react";
import { useObserver } from "mobx-react";
import StoreContext from "../containers/StoreContext";
import AudioWavesMini from "./AudioWavesMini";

const { ipcRenderer } = window.require("electron");

export default function Library() {
  const store = React.useContext(StoreContext);

  const playSong = (e) => {
    const index = e.target.getAttribute("index");
    store.setQueueIndex(parseInt(index));
    store.play();
  };

  return useObserver(() => (
    <div className="w-full text-gray-600">
      <table className="w-full table-space">
        <tbody>
          <tr>
            <th className="font-light text-left text-xl pl-2 cursor-pointer sticky top-0 bg-dark-blue">
              Title
            </th>
            <th className="font-light text-left text-xl pl-2 cursor-pointer sticky top-0 bg-dark-blue">
              Artist
            </th>
            <th className="font-light text-left text-xl pl-2 cursor-pointer sticky top-0 bg-dark-blue">
              Album
            </th>
            <th className="font-light text-left text-xl pl-2 cursor-pointer sticky top-0 bg-dark-blue">
              Added
            </th>
            <th className="font-light text-left text-xl pl-2 cursor-pointer sticky top-0 bg-dark-blue">
              Duration
            </th>
          </tr>
          {store.songLibrary.map((song, index) => (
            <tr
              key={song.title + song.artist + song.added}
              className={`${
                store.queue[store.queueIndex].title.includes(song.title)
                  ? "active"
                  : ""
              } inner-border rounded-md font-thin text-md cursor-pointer border border-transparent transition-colors duration-100 ease-in-out`}
              index={index}
              onClick={(e) => {
                playSong(e);
              }}
            >
              <td
                className="p-2 justify-between items-center rounded-l-md border-l border-b border-t border-transparent"
                index={index}
              >
                {song.title}
                <AudioWavesMini
                  className={`${
                    store.queue[store.queueIndex].title.includes(song.title)
                      ? "waves-active"
                      : ""
                  }`}
                />
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
                {new Date(1 * song.duration).toISOString().substr(11, 8).replace('00:', '')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ));
}
