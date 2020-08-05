import React from "react";
import { Nav } from "./components/Nav/Nav";
import { Card } from "./components/UI/Card";
import "./styles/index.css";

function App() {
  return (
    <div className="App flex flex-col items-center bg-gray-50">
      <Nav />
      <div className="flex flex-col w-1/2 border-l-2 border-gray-400 mt-12">
        <p className="text-gray-500 italic text-sm mb-2 ml-2">Thread #122323</p>
        <Card
          text
          margin="mb-4"
          className="h-4 w-4 border-t-2 border-gray-400"
        />
        <div className="flex flex-col">
          <Card
            text
            margin="mb-4"
            className="h-4 w-16 border-t-2 border-gray-400"
          />
          <Card
            reply
            margin="mb-4"
            className="h-4 w-16 border-t-2 border-gray-400"
          />
          <Card text className="h-4 w-16 border-t-2 border-gray-400" />
        </div>
      </div>
      <div className="flex flex-col w-1/2 border-l-2 border-gray-400 mt-12">
        <p className="text-gray-500 italic text-sm mb-2 ml-2">Thread #122323</p>
        <Card
          text
          margin="mb-4"
          className="h-4 w-4 border-t-2 border-gray-400"
        />
        <div className="flex flex-col">
          <Card
            text
            margin="mb-4"
            className="h-4 w-16 border-t-2 border-gray-400"
          />
          <Card
            reply
            margin="mb-4"
            className="h-4 w-16 border-t-2 border-gray-400"
          />
          <Card text className="h-4 w-16 border-t-2 border-gray-400" />
        </div>
      </div>
    </div>
  );
}

export default App;
