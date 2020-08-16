import socketIOClient from "socket.io-client";

export const useSocket = () => {
  const socket = socketIOClient("http://localhost:5000/");
  return { socket };
};
