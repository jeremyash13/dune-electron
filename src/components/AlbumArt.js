import React from 'react'
import StoreContext from "../containers/StoreContext";

export default function AlbumArt({className}) {
  const store = React.useContext(StoreContext);
  return (
        <div className={`${className}`}>
            <img src={`data:image/jpeg;base64,${store.queue[store.queueIndex].albumArt}`} className="rounded-lg shadow-md"></img>
        </div>
    )
}
