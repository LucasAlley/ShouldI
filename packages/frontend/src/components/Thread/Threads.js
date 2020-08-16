import { motion } from "framer-motion";
import React from "react";
import { Thread } from "./Thread";
export const Threads = ({ setThreads, threads }) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      className="lg:w-1/2 w-full sm:px-4 px-2"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {threads.map((el, i) => {
        return <Thread info={el} key={el._id} />;
      })}
    </motion.div>
  );
};
