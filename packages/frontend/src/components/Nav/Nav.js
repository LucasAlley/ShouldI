import React from "react";

export const Nav = () => {
  return (
    <nav className="mt-12 flex items-center">
      <h1 className="text-5xl italic text-gray-700 font-semibold">
        Should I .... ?
      </h1>

      <div className="rounded-full bg-blue-700 shadow-lg flex justify-center items-center ml-4 px-2 py-2 cursor-pointer">
        <ion-icon
          style={{ color: "#fff", fontSize: "32px" }}
          name="create"
        ></ion-icon>
      </div>
      <h2 className="text-xl italic ml-8 text-blue-600">
        433 Should I's and counting
      </h2>
    </nav>
  );
};
