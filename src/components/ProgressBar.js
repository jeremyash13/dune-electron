import React from "react";
import { useObserver } from "mobx-react";
import StoreContext from "../containers/StoreContext";

export default function ProgressBar() {
  const store = React.useContext(StoreContext);
  return useObserver(() => (
    <div>
      <div className="w-full h-1 bg-gray-800 rounded">
        <div
          className="h-full progress-gradient rounded transition-all duration-1000 ease-linear"
          style={{
            width: `${
              (store.position / store.queue[store.queueIndex].duration) * 100
            }%`,
          }}
        ></div>
      </div>
    </div>
  ));
}
