import React, { useEffect } from "react";
import "@openfonts/jost_latin";
import PlayBar from "./components/PlayBar";
import Library from "./components/Library";
import { useObserver } from "mobx-react";
import Sound from "react-sound";
import StoreContext from "./containers/StoreContext";
import LeftPane from "./components/LeftPane";
import Search from "./components/Search";
const { ipcRenderer } = window.require("electron");

export default function App() {
  const store = React.useContext(StoreContext);
  useEffect(() => {
    store.setSongLibrary([...ipcRenderer.sendSync("initLibrary", "ping")]);
    store.setQueue(store.songLibrary);
  }, []);

  const songEndHandler = () => {
    store.nextSong();
  };

  return useObserver(() => (
    <div className="font-jost text-white bg-horizon-black h-screen flex flex-col p-8 select-none" >
      <div className="flex justify-between main-height">
        <LeftPane />
        <div className="flex flex-col">
          <Search />
          <Library />
        </div>
      </div>
      <PlayBar />
      <Sound
        url={store.queue[store.queueIndex].src}
        volume={store.volume}
        playStatus={store.playStatus}
        position={store.position}
        onPlaying={(data) => {
          store.setPosition(data.position);
        }}
        onFinishedPlaying={songEndHandler}
      />
    </div>
  ));
}
