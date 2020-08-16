import clsx from "clsx";
import React from "react";
import { useScroll } from "../../hooks/useScroll";
import { Bar } from "../ui/Bar";

export const Nav = ({ openFunc }) => {
  const { hidden } = useScroll();

  return (
    <>
      <nav
        className={clsx(
          "mt-12 flex items-center relative bar",
          hidden ? "nav-hidden" : "nav-show"
        )}
      >
        <h1 className="sm:text-5xl text-3xl italic text-gray-700 font-semibold">
          Should I ....
        </h1>

        <button
          type="button"
          onClick={openFunc}
          className="rounded-full bg-blue-700 shadow-lg flex justify-center items-center ml-4 px-2 py-2 cursor-pointer"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="pencil sm:w-6 sm:h-6 w-4 h-4 text-white"
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
      </nav>
      <Bar hidden={hidden} openFunc={openFunc} />
    </>
  );
};
