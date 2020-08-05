import React from "react";

export const Card = ({ className, margin, text, reply }) => {
  //TODO: add in view repl
  return (
    <div className={`w-full flex items-center ${margin}`}>
      <div className={className}></div>
      <div className="bg-white rounded-lg px-2 shadow py-6 flex items-center justify-between w-full">
        {text && (
          <p className="text-xl text-gray-800">
            Should I leave my job in Ohio?
          </p>
        )}
        {reply && (
          <p className="text-xl text-gray-800">
            <span className="bg-blue-700 text-white rounded-full text-sm py-2 px-2 shadow mr-2">
              @72{" "}
            </span>{" "}
            Great idea{" "}
          </p>
        )}
        <div className="flex items-center">
          <ion-icon
            style={{ fontSize: "24px", cursor: "pointer" }}
            name="arrow-redo"
          ></ion-icon>
          <div className="flex flex-col ml-4">
            <ion-icon
              style={{ fontSize: "24px", cursor: "pointer" }}
              name="caret-up"
            ></ion-icon>
            <ion-icon
              style={{ fontSize: "24px", cursor: "pointer" }}
              name="caret-down"
            ></ion-icon>
          </div>
        </div>
      </div>
      <ion-icon
        style={{ fontSize: "32px", cursor: "pointer", marginLeft: "24px" }}
        name="analytics"
      ></ion-icon>
    </div>
  );
};
