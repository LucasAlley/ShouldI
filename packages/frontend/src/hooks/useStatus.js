import { useMemo, useState } from "react";

export const useStatus = (defaultValue) => {
  const [status, setStatus] = useState(defaultValue);
  const setters = useMemo(
    () => ({
      loading() {
        setStatus("LOADING");
      },
      resolved() {
        setStatus("RESOLVED");
      },
      idle() {
        setStatus("IDLE");
      },
      error() {
        setStatus("ERROR");
      },
      retry() {
        setStatus("RETRY");
      },
    }),
    [setStatus]
  );
  return [status, setters];
};
