import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { useLocalStore } from "mobx-react";
import StoreContext from "./containers/StoreContext";

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    setQueueIndex: (newState) => {
      if (newState !== -1 && newState < store.queue.length) {
        store.queueIndex = newState;
      }
    },
    setQueue: (newState) => {
      store.queue = [...newState];
    },
    setPosition: (newState) => {
      store.position = newState;
    },
    setSongLibrary: (newState) => {
      store.songLibrary = [...newState];
    },
    setCurrentSong: (newState) => {
      store.currentSong = newState;
    },
    prevSong: () => {
      if (store.queueIndex !== 0) {
        store.queueIndex--;
        store.setPosition(0)
      }
    },
    nextSong: () => {
      if (store.queueIndex < store.queue.length - 1) {
        store.queueIndex++;
        store.setPosition(0)
      }
    },
    play: () => {
      store.playStatus = "PLAYING";
    },
    pause: () => {
      store.playStatus = "PAUSED";
    },
    playStatus: "STOPPED",
    position: 0, //milliseconds
    queueIndex: 0,
    songLibrary: [
      {
        src: "",
        title: "",
        artist: "",
        album: "",
        added: "",
        duration: "",
        albumArt: "",
      },
    ],
    queue: [
      {
        src: "",
        title: "",
        artist: "",
        album: "",
        added: "",
        duration: "",
        albumArt: "",
      },
    ],
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

ReactDOM.render(
  <StoreProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StoreProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
