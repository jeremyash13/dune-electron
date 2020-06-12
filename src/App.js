import React, { useEffect } from "react";
import "@openfonts/jost_latin";
import PlayBar from "./components/PlayBar";
import Library from "./components/Library";
import { useLocalStore, useObserver } from "mobx-react";
import Sound from "react-sound";
import StoreContext from "./containers/StoreContext";
const { ipcRenderer } = window.require("electron");

export default function App() {
  const store = React.useContext(StoreContext);
  useEffect(() => {
    store.songLibrary = [...ipcRenderer.sendSync("initLibrary", "ping")];
  }, []);

  const soundProps = {
    url: "C:/Music/Overnight.mp3",
    playStatus: Sound.status.PLAYING,
  };

  return useObserver(() => (
    <div className="font-jost text-white bg-dark-blue h-screen flex flex-col p-8">
      <Library />
      <PlayBar />
      <Sound {...soundProps} />
    </div>
  ));
}
