import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { useLocalStore } from "mobx-react";
import StoreContext from "./containers/StoreContext";

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    isPlaying: false,
    currentSong: '',
    songLibrary: [
      {
        src: "",
        title: "",
        artist: "",
        album: "",
        added: "",
        duration: "",
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
