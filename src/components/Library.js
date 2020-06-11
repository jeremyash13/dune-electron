import React from "react";
import StoreContext from "../containers/StoreContext";

export default function Library() {
  const store = React.useContext(StoreContext);

  return (
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
          {store.songLibrary.map((song) => (
            <tr
              key={song.title + song.artist + song.added}
              className="font-thin text-center text-sm cursor-pointer hover:bg-gray-800 transition-colors duration-100 ease-in-out"
            >
              <td className="p-2 rounded-l-md">{song.title}</td>
              <td className="p-2">{song.artist}</td>
              <td className="p-2">{song.album}</td>
              <td className="p-2">{song.added}</td>
              <td className="p-2 rounded-r-md">{song.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
