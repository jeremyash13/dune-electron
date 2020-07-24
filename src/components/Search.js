import React from "react";
import StoreContext from "../containers/StoreContext";
import { useObserver } from "mobx-react";

export default function Search() {
  const store = React.useContext(StoreContext);

  return useObserver(() => (
    <div className="ml-auto mr-10 mb-6 w-72 relative ">
      <input
        type="text"
        placeholder="Search"
        value={store.searchValue}
        spellCheck="false"
        onChange={(e) => {
          store.setSearchValue(e.target.value);
        }}
        className="bg-horizon-black border-2 border-horizon-gray rounded-full px-4 py-1 placeholder-gray-600 font-thin w-full"
      />
      <div className="w-5 text-gray-700 absolute top-0 right-0 transform -translate-x-3 translate-y-2">
        <svg viewBox="0 0 24 24">
          <g data-name="Layer 2" id="Layer_2">
            <path fill="currentColor" d="M18,10a8,8,0,1,0-3.1,6.31l6.4,6.4,1.41-1.41-6.4-6.4A8,8,0,0,0,18,10Zm-8,6a6,6,0,1,1,6-6A6,6,0,0,1,10,16Z" />
          </g>
        </svg>
      </div>
    </div>
  ));
}
