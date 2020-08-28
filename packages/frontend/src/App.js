import Axios from "axios";
import randomString from "randomstring";
import React from "react";
import { Nav } from "./components/Nav/Nav";
import { Create } from "./components/Thread/Create";
import { Threads } from "./components/Thread/Threads";
import { LoadingCard } from "./components/UI/Card";
import { UserContext } from "./context/UserContext";
import { useBoolean } from "./hooks/useBoolean";
import { useStatus } from "./hooks/useStatus";
import "./styles/index.css";
function App() {
  const [openModal, { on: open, off: close }] = useBoolean(false);
  const [status, { resolved }] = useStatus("LOADING");
  const [threads, setThreads] = React.useState([]);

  const [tempID, setTempID] = React.useState("");
  React.useEffect(() => {
    async function getInitial() {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };
      const {
        data: { threads },
      } = await Axios.get("https://api.shouldi.so/api/thread", config);
      setTempID(randomString.generate(7));
      setThreads(threads);
      resolved();
    }
    getInitial();
  }, [resolved, setThreads]);

  return (
    <div className="relative flex flex-col items-center bg-gray-50 min-h-screen">
      <Nav open={openModal} onClose={close} openFunc={open} />
      {status === "LOADING" && <LoadingCard />}
      <UserContext.Provider value={{ tempID, setThreads, threads }}>
        <Create openModal={openModal} close={close} />
        {status === "RESOLVED" && (
          <Threads threads={threads} setThreads={setThreads} />
        )}
      </UserContext.Provider>

      <div className="fixed left-0 bottom-0">
        <a
          className="cursor-pointer"
          href="https://github.com/LucasAlley/ShouldI"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ion-icon
            style={{ fontSize: "38px", marginLeft: "10px", zIndex: "10" }}
            name="logo-github"
          ></ion-icon>
        </a>
      </div>
    </div>
  );
}

export default App;
