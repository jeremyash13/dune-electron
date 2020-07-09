import React from "react";
import Shuffle from "./Shuffle";
import Repeat from "./Repeat";

export default function QueueModifierControls() {
  return (
    <div className="">
      <Shuffle />
      <Repeat />
    </div>
  );
}
