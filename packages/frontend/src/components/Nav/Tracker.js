import React, { useEffect, useState } from "react";
import socket from "../util/socketConfig";

export const Tracker = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //getting initial count

    socket.emit("GET_COUNT");
    //listening for new count

    socket.on("COUNT", (num) => setCount(num));
    return () => socket.disconnect();
  }, []);
  return (
    <h2 className="text-xl italic ml-8 text-blue-600">
      {count} Should I's and counting
    </h2>
  );
};
