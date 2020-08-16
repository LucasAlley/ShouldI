import { motion } from "framer-motion";
import React, { useState } from "react";
import { ThreadCard } from "../UI/Card";
import { Replies } from "./Replies";
export const Thread = ({ info }) => {
  const [openReplies, setOpenReplies] = useState(false);
  const [newReply, setNewReply] = useState(false);
  const [replyCount, setReplyCount] = useState(0);

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={item}
      className="flex flex-col w-full border-l-2 border-gray-400 mt-12 overflow-hidden"
    >
      <p className="text-gray-500 italic text-sm mb-2 ml-2">
        Thread #{info.threadId}
      </p>
      <ThreadCard
        className="h-4 w-4 border-t-2 border-gray-400"
        margin="mb-4"
        info={info}
        onClick={() => setOpenReplies(!openReplies)}
        replyCount={replyCount}
        openContainer={openReplies}
      />
      <Replies
        open={openReplies}
        newReply={newReply}
        setNewReply={setNewReply}
        setReplyCount={setReplyCount}
        replyCount={replyCount}
        threadId={info._id}
        info={info}
      />
    </motion.div>
  );
};
/*<p className="text-xl text-gray-800">
              <span className="bg-blue-700 text-white rounded-full text-sm py-2 px-2 shadow mr-2">
                @1232321{" "}
              </span>{" "}
              Great idea{" "}
            </p>*/
/**
 *
 *
 */
