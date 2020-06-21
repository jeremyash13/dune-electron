import React, { useEffect } from "react";
import "@openfonts/jost_latin";
import PlayBar from "./components/PlayBar";
import Library from "./components/Library";
import { useObserver } from "mobx-react";
import Sound from "react-sound";
import StoreContext from "./containers/StoreContext";
import LeftPane from "./components/LeftPane";
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
    <div className="font-jost text-white bg-dark-blue h-screen flex flex-col p-8 select-none">
      <div className="flex">
        <LeftPane />
        <Library />
      </div>
      <PlayBar />
      <Sound
        url={store.queue[store.queueIndex].src}
        playStatus={store.playStatus}
        // playFromPosition={store.position}
        onPlaying={(data) => {
          store.setPosition(data.position);
        }}
        onFinishedPlaying={songEndHandler}
      />
    </div>
  ));
}
