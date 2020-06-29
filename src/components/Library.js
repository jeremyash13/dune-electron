import React from "react";
import { useObserver } from "mobx-react";
import StoreContext from "../containers/StoreContext";
import AudioWavesMini from "./AudioWavesMini";

export default function Library() {
  const store = React.useContext(StoreContext);

  const playSong = (e) => {
    store.setPosition(0);
    const index = e.target.getAttribute("index");
    store.setQueueIndex(parseInt(index));
    store.play();
  };

  return useObserver(() => (
    <div className="w-full overflow-scroll overflow-x-hidden custom-scroll text-gray-600">
      <table className="w-full table-space px-8">
        <tbody>
          <tr>
            <th className="font-light w-80 flex items-center text-left text-xl pl-6 sticky top-0 bg-horizon-black">
              <div>Title</div>
            </th>
            <th className="font-light w-40 text-left text-xl pl-2 sticky top-0 bg-horizon-black">
              Duration
            </th>
            <th className="font-light w-56 text-left text-xl pl-2 sticky top-0 bg-horizon-black">
              Artist
            </th>
            <th className="font-light w-40 text-left text-xl pl-2sticky top-0 bg-horizon-black">
              Album
            </th>
          </tr>
          {store.songLibrary.map((song, index) => {
            let lowerCaseSearchValue = store.searchValue.toLowerCase();
            let lowerCaseTitle;
            let lowerCaseArtist;
            let lowerCaseAlbum;

            if (song.title) {
              lowerCaseTitle = song.title.toLowerCase();
            } else {
              lowerCaseTitle = "";
            }

            if (song.artist) {
              lowerCaseArtist = song.artist.toLowerCase();
            } else {
              lowerCaseArtist = "";
            }

            if (song.album) {
              lowerCaseAlbum = song.album.toLowerCase();
            } else {
              lowerCaseAlbum = "";
            }

            if (
              lowerCaseTitle.includes(lowerCaseSearchValue) ||
              lowerCaseArtist.includes(lowerCaseSearchValue) ||
              lowerCaseAlbum.includes(lowerCaseSearchValue)
            ) {
              return (
                <tr
                  key={song.title + song.artist + song.added}
                  className={`${
                    store.queue[store.queueIndex].title.includes(song.title)
                      ? "active"
                      : ""
                  } rounded-md font-normal text-md cursor-pointer border border-transparent transition-colors duration-500 ease-out hover:text-horizon-red`}
                  index={index}
                  onClick={(e) => {
                    playSong(e);
                  }}
                >
                  <td
                    className="pl-6 w-80 justify-between items-center rounded-l-md border-l border-b border-t border-transparent"
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
                  <td className="p-2 w-40" index={index}>
                    {song.duration &&
                      new Date(1 * song.duration)
                        .toISOString()
                        .substr(11, 8)
                        .replace("00:", "")}
                  </td>
                  <td className="p-2 w-56" index={index}>
                    {song.artist}
                  </td>
                  <td className="p-2 rounded-r-md w-40" index={index}>
                    {song.album}
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  ));
}
