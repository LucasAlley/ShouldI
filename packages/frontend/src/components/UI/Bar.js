import clsx from "clsx";
import React from "react";
export const Bar = ({ hidden, openFunc }) => {
  return (
    <div
      className={clsx(
        "bar fixed right-0 mb-6 mr-4 z-10 flex items-center",
        !hidden ? "bar-hide" : "bar-show"
      )}
    >
      <button
        type="button"
        onClick={openFunc}
        className="rounded-full bg-blue-700 flex justify-center items-center ml-4 px-2 py-2 cursor-pointer"
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="pencil w-6 h-6 text-white"
          data-darkreader-inline-fill=""
          data-darkreader-inline-stroke=""
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      </button>
    </div>
  );
};
