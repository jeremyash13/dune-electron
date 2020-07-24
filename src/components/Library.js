import React from "react";
import { useObserver } from "mobx-react";
import StoreContext from "../containers/StoreContext";
import AudioWavesMini from "./AudioWavesMini";
import SongContextMenu from "./SongContextMenu";

export default function Library() {
  const store = React.useContext(StoreContext);

  const playSong = (e) => {
    store.setPosition(0);
    const index = parseInt(e.target.getAttribute("index"));

    const newQueue = store.songLibrary.slice(index);
    store.setQueue(newQueue);
    store.setNowPlaying(store.queue.dequeue());

    store.play();
  };

  return useObserver(() => (
    <div className="w-full font-euclid-reg overflow-scroll overflow-x-hidden custom-scroll text-gray-600">
      <table className="w-full table-space px-8">
        <tbody>
          <tr>
            <th className="font-light w-80 text-left text-xl pl-6 sticky top-0 bg-horizon-black z-20">
              Title
            </th>
            <th className="font-light w-40 text-left text-xl pl-2 sticky top-0 bg-horizon-black">
              Duration
            </th>
            <th className="font-light w-56 text-left text-xl pl-2 sticky top-0 bg-horizon-black">
              Artist
            </th>
            <th className="font-light w-40 text-left text-xl pl-2 sticky top-0 bg-horizon-black">
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
                  key={song.title + song.artist}
                  // className={`${
                  //   store.nowPlaying.title === song.title
                  //     ? "active"
                  //     : ""
                  // }
                  className={`rounded-md font-normal text-md cursor-pointer border border-transparent transition-colors duration-500 ease-out hover:text-horizon-red`}
                  index={index}
                  onClick={(e) => {
                    playSong(e);
                  }}
                >
                  <td
                    className="pl-6 w-80 flex rounded-l-md border-l border-b border-t border-transparent relative"
                    index={index}
                  >
                    <SongContextMenu />
                    <div
                      className="whitespace-no-wrap truncate w-48"
                      index={index}
                    >
                      {song.title}
                    </div>
                    <AudioWavesMini
                      index={index}
                      className={`w-4 ${
                        store.nowPlaying.title === song.title
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
                    <div className="whitespace-no-wrap truncate w-48">
                      {song.artist}
                    </div>
                  </td>
                  <td className="p-2 rounded-r-md w-40" index={index}>
                    <div className="whitespace-no-wrap truncate w-40">
                      {song.album}
                    </div>
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
