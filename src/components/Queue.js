import React from "react";

export default function Queue() {
  return (
    <div className="text-gray-700 w-8 cursor-pointer hover:text-horizon-red transition-colors duration-200 ease-in-out">
      <svg viewBox="0 0 48 48" className="w-full h-full">
        <path
          fill="currentColor"
          d="M8 21c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0-12c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 24.33c-1.47 0-2.67 1.19-2.67 2.67s1.2 2.67 2.67 2.67 2.67-1.19 2.67-2.67-1.2-2.67-2.67-2.67zm6 4.67h28v-4h-28v4zm0-12h28v-4h-28v4zm0-16v4h28v-4h-28z"
        />
        <path d="M0 0h48v48h-48z" fill="none" />
      </svg>
    </div>
  );
}
