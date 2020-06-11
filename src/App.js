import React, {useEffect} from "react";
import "@openfonts/jost_latin";
import PlayBar from "./components/PlayBar";
import Library from "./components/Library";
import StoreContext from "./containers/StoreContext";
import ReactHowler from "react-howler";
import { useLocalStore, useObserver } from "mobx-react";
import Sound from 'react-sound';
import mp3url from './test-music/Overnight.mp3'
// const { ipcRenderer } = require('electron')

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    isPlaying: false,
    songLibrary: [
      {
        src: "PATH TO FILE?",
        title: "Overnight",
        artist: "Parcels",
        album: "Unknown",
        added: "2020-05-27",
        duration: "3:39",
      },
    ],

    togglePlay: () => {
      store.isPlaying = !store.isPlaying;
    },
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default function App() {
  useEffect(() => {
    // console.log(ipcRenderer.send('init-library', 'ping'))
  }, [])

  const soundProps = {
    url: mp3url,
    playStatus: Sound.status.PLAYING
  }

  return (
    <StoreProvider>
      <div className="font-jost text-white bg-dark-blue h-screen flex flex-col p-8">
        <Library />
        <PlayBar />
        <Sound {...soundProps} />
      </div>
    </StoreProvider>
  );
}
