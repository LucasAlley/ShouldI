import axios from "axios";
import clsx from "clsx";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { EmptyCard, ReplyCard } from "../UI/Card";
import { Form } from "./Reply/form/Form";
export const Replies = ({
  open,
  threadId,
  info,
  setReplyCount,
  replyCount,
  setNewReply,
}) => {
  const [repArr, setRepArr] = useState([]);

  const { tempID } = useContext(UserContext);
  useEffect(() => {
    const getReplies = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };
      const {
        data: { replies },
      } = await axios.post(
        "https://www.api.shouldi.so/api/reply",
        {
          threadId,
        },
        config
      );
      setReplyCount(replies.length);
      setRepArr(replies);
    };
    getReplies();
  }, [setReplyCount, threadId, setRepArr]);

  //when user submits push that reply to the repArr

  const handleDone = (reply) => {
    setRepArr((old) => [reply, ...old]);
    setReplyCount(replyCount + 1);
    repArr.push(reply);
  };
  return (
    <div
      className={clsx(
        "flex flex-col transition-all duration-200",
        open ? "max-h-auto" : "max-h-0"
      )}
    >
      <EmptyCard userID={tempID}>
        <Form info={info} handleDone={handleDone} setNewReply={setNewReply} />
      </EmptyCard>
      {repArr.length > 0 &&
        repArr.map((el) => {
          return (
            <ReplyCard
              key={el._id}
              info={el}
              className="h-4 w-16 border-t-2 border-gray-400"
            />
          );
        })}
    </div>
  );
};
