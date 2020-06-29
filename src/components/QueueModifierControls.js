import React from "react";
import Shuffle from "./Shuffle";

export default function QueueModifierControls() {
  return (
    <div className="flex text-gray-700 absolute top-1/2 right-1/2 transform -translate-y-1/2 -translate-x-32">
      <Shuffle />
    </div>
  );
}
