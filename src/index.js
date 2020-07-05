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
    prevSong: () => {
      if (store.queueIndex !== 0) {
        store.setPosition(0);
        store.setQueueIndex(store.queueIndex - 1);
      }
    },
    nextSong: () => {
      // check for shuffle condition
      if (store.shuffle && store.repeat !== 2) {
        store.setQueueIndex(Math.floor((Math.random() * (store.queue.length - 1)) + 1))
        store.setPosition(0)
      }

      // check for repeat condition
      if (store.repeat === 2) {
        // repeat single song
        store.setPosition(0);
      } else if (store.repeat === 1 && store.queueIndex === store.queue.length - 1) {
        // go to beginning of queue
        store.setPosition(0);
        store.setQueueIndex(0);
      } else if (store.queueIndex < store.queue.length - 1) {
        // increment queue if not on the last song in queue

        store.setQueueIndex(store.queueIndex + 1);
        store.setPosition(0);
      }
    },
    play: () => {
      store.playStatus = "PLAYING";
    },
    pause: () => {
      store.playStatus = "PAUSED";
    },
    setSearchValue: (newState) => {
      store.searchValue = newState;
    },
    setVolume: (newState) => {
      store.volume = newState;
    },
    setShuffle: (newState) => {
      store.shuffle = newState;
    },
    setRepeat: (newState) => {
      store.repeat = newState;
    },
    searchValue: "",
    playStatus: "STOPPED",
    position: 0, // milliseconds
    queueIndex: 0,
    volume: 90,
    shuffle: false,
    repeat: 0,
    songLibrary: [
      {
        src: "",
        title: "",
        artist: "",
        album: "",
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
