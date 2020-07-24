import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import { useLocalStore } from "mobx-react";
import StoreContext from "./containers/StoreContext";
import Queue from "./react-modules/Queue";
import Stack from "./react-modules/Stack";

const q = new Queue();
const s = new Stack();

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    setQueue: (arr) => {
      store.queue.clear();
      for (let item of arr) {
        // queue should be an array of pointers to the tracks within the song library
        let pointer = item;
        store.queue.enqueue(pointer);
      }
    },
    setPosition: (newState) => {
      store.position = newState;
    },
    setSongLibrary: (newState) => {
      store.songLibrary = [...newState];
    },
    prevSong: () => {
      // lookup nowPlaying equivolent in SongLibrary, create a pointer, push pointer to front of queue
      let pointer;
      for (let i of store.songLibrary) {
        if (i.title === store.nowPlaying.title) {
          pointer = i;
          break;
        }
      }
      store.queue.addFront(pointer);

      if (!store.stack.isEmpty()) {
        store.setPosition(0);
        store.setNowPlaying(store.stack.pop());
      }
    },
    shuffleQueue: () => {
      store.queue.shuffle();
    },
    nextSong: () => {
      // move current song to stack before moving to the next song
      const currentSong = store.nowPlaying;
      store.stack.push(currentSong);

      // check for repeat condition
      if (store.repeat === 2) {
        // repeat single song
        store.setPosition(0);
      } else if (store.repeat === 1 && store.queue.isEmpty()) {
        // rebuild queue, play from beginning
        store.setQueue(store.songLibrary);
        store.setPosition(0);
        store.setNowPlaying(store.queue.dequeue());
      } else if (!store.queue.isEmpty()) {
        // increment queue if not on the last song in queue
        store.setNowPlaying(store.queue.dequeue());
        store.setPosition(0);
      } else if (store.queue.isEmpty()) {
        // playlist is over, stop playback
        store.setPosition(0);
        store.playStatus = "STOPPED";
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
    setShowQueue: (newState) => {
      store.showQueue = newState;
    },
    setNowPlaying: (newState) => {
      store.nowPlaying = newState;
    },
    stack: s, // stack is an array of pointers
    queue: q, // queue is an array of pointers
    searchValue: "",
    playStatus: "STOPPED",
    position: 0, // milliseconds
    volume: 90,
    shuffle: false,
    repeat: 0,
    showQueue: false,
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
    nowPlaying: {
      src: "",
      title: "",
      artist: "",
      album: "",
      duration: "",
      albumArt: "",
    },
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
