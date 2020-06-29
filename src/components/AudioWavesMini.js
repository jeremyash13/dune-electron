import React from "react";
import StoreContext from "../containers/StoreContext";

export default function AudioWavesMini({ className }) {
  const store = React.useContext(StoreContext);
  const waveStyle = {
    margin: "auto",
    background: "rgba(0, 0, 0, 0) none repeat scroll 0% 0%",
    display: "block",
    shapeRendering: "auto",
  };

  return (
    <>
      {store.playStatus === "PLAYING" && (
        <div
          className={`w-4 opacity-0 inline-block ml-2 transform translate-y-1 ${className}`}
        >
          <svg
            style={waveStyle}
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <g transform="rotate(180 50 50)">
              <rect x="11" y="12.5" width="18" height="40" fill="currentColor">
                <animate
                  attributeName="height"
                  calcMode="spline"
                  values="50;75;10;50"
                  times="0;0.33;0.66;1"
                  dur="1.7857142857142856s"
                  keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
                  repeatCount="indefinite"
                  begin="-0.8928571428571428s"
                ></animate>
              </rect>
              <rect x="31" y="12.5" width="18" height="40" fill="currentColor">
                <animate
                  attributeName="height"
                  calcMode="spline"
                  values="50;75;10;50"
                  times="0;0.33;0.66;1"
                  dur="1.7857142857142856s"
                  keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
                  repeatCount="indefinite"
                  begin="-1.3392857142857142s"
                ></animate>
              </rect>
              <rect x="51" y="12.5" width="18" height="40" fill="currentColor">
                <animate
                  attributeName="height"
                  calcMode="spline"
                  values="50;75;10;50"
                  times="0;0.33;0.66;1"
                  dur="1.7857142857142856s"
                  keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
                  repeatCount="indefinite"
                  begin="-0.4464285714285714s"
                ></animate>
              </rect>
              <rect x="71" y="12.5" width="18" height="40" fill="currentColor">
                <animate
                  attributeName="height"
                  calcMode="spline"
                  values="50;75;10;50"
                  times="0;0.33;0.66;1"
                  dur="1.7857142857142856s"
                  keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
                  repeatCount="indefinite"
                  begin="0s"
                ></animate>
              </rect>
            </g>
          </svg>
        </div>
      )}
    </>
  );
}
