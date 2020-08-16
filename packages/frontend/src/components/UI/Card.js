import clsx from "clsx";
import React from "react";

export function Card({ thread, children }) {
  return (
    <div className={`w-full flex items-center mb-4`}>
      <div
        className={clsx(
          "h-4 border-t-2 border-gray-400",
          thread ? "w-4" : "md:w-16 w-8"
        )}
      ></div>
      <div className="bg-white rounded-lg px-2 shadow py-6 flex items-center justify-between w-full">
        {children}
      </div>
    </div>
  );
}

export function ReplyInformation({ info }) {
  const { createdBy, replyTo, reply } = info;
  return (
    <div className="flex flex-col">
      <p className="w-full text-sm italic text-gray-600 mb-2">
        Reply by <span className="text-blue-600 font-medium">{createdBy}</span>
      </p>
      <p className="md:text-xl text-md text-gray-800">
        {replyTo && (
          <span className="bg-blue-700 text-white rounded-full text-sm py-2 px-2 shadow mr-2">
            {replyTo}{" "}
          </span>
        )}{" "}
        {reply}
      </p>
    </div>
  );
}

function ThreadInformation({ createdBy, question }) {
  return (
    <div className="flex flex-col">
      <p className="w-full text-sm italic text-gray-600">
        Posted by <span className="text-blue-600 font-medium">{createdBy}</span>
      </p>
      <p className="md:text-xl text-md text-gray-800">{question}</p>
    </div>
  );
}
function ReplyCounter({ replyCount }) {
  return (
    <div className="flex items-center">
      <span className="text-indigo-500">{replyCount}</span>
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="chat-alt2 md:w-6 md:h-6 w-4 h-4 text-blue-600"
        data-darkreader-inline-fill=""
        data-darkreader-inline-stroke=""
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        />
      </svg>
    </div>
  );
}

function ThreadActions({ onClick, openContainer }) {
  return (
    <div className="flex items-center">
      <button onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={clsx(
            "w-8 cursor-pointer icon-cheveron-up fill-current text-gray-800 transform transition-all duration-200",
            openContainer ? "rotate-0" : "rotate-180"
          )}
        >
          <path
            className="secondary"
            fillRule="evenodd"
            d="M8.7 13.7a1 1 0 1 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L12 10.42l-3.3 3.3z"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export function ThreadCard({ info, onClick, openContainer, replyCount }) {
  return (
    <Card thread>
      <ThreadInformation createdBy={info.createdBy} question={info.question} />
      <div className="flex">
        <ReplyCounter replyCount={replyCount} />
        <ThreadActions onClick={onClick} openContainer={openContainer} />
      </div>
    </Card>
  );
}

export function ReplyCard({ info }) {
  return (
    <Card>
      <ReplyInformation info={info} />
    </Card>
  );
}
export const EmptyCard = ({ children, userID }) => {
  return (
    <Card>
      <div className="flex flex-col w-full">
        <div className="flex flex-col">
          <p className="text-sm italic text-gray-600 mb-2">
            Reply by <span className="text-blue-600 font-medium">{userID}</span>
          </p>
        </div>
        {children}
      </div>
    </Card>
  );
};

export const LoadingCard = () => {
  return (
    <div className="border border-gray-300 shadow rounded-md p-4 lg:w-1/2 w-11/12 mt-4">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-gray-400 h-12 w-12"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-400 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-400 rounded"></div>
            <div className="h-4 bg-gray-400 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
