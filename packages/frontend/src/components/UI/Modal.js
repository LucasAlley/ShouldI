import FocusTrap from "focus-trap-react";
import { AnimatePresence, motion } from "framer-motion";
import noScroll from "no-scroll";
import React, { useEffect, useRef } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { MEDIA_QUERIES } from "./constants";
import Portal from "./util/Portal";
export function ModalContent({ title, children }) {
  return (
    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 -mt-12">
      <div className="sm:flex sm:items-start">
        <div className="mt-3 text-center sm:mt-0 sm:text-left">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {title}
          </h3>
          <div className="mt-2">{children}</div>{" "}
        </div>
      </div>
    </div>
  );
}

export function ModalFooter({ children }) {
  return (
    <div className="bg-gray-100 py-3 px-4 sm:px-6 sm:flex sm:flex-row-reverse">
      {children}
    </div>
  );
}

export default function Modal({ open, onClose, children }) {
  const atLeastSmall = useMediaQuery(MEDIA_QUERIES.SMALL);

  const modalInitial = atLeastSmall
    ? {
        opacity: 0,
        scale: 0.95,
      }
    : {
        opacity: 0,
        y: 25,
      };

  const modalIn = atLeastSmall
    ? {
        opacity: 1,
        scale: 1,
      }
    : {
        opacity: 1,
        y: 0,
      };
  const node = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (node.current.contains(e.target)) {
        // inside click
        return;
      }
      // outside click
      onClose();
    };
    const handleEscape = (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("keydown", handleEscape);
      noScroll.on();
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      noScroll.off();
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <Portal>
          <FocusTrap>
            <div className="fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center">
              <motion.div
                className="fixed inset-0 transition-opacity"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </motion.div>

              <motion.div
                initial={modalInitial}
                animate={modalIn}
                transition={{ duration: 0.3, ease: "easeOut" }}
                exit={modalInitial}
                role="dialog"
              >
                <div
                  ref={node}
                  className="bg-white rounded-lg pt-5 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-headline"
                >
                  {children}
                </div>
              </motion.div>
            </div>
          </FocusTrap>
        </Portal>
      )}
    </AnimatePresence>
  );
}
/*
  <div
                className="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full sm:p-6"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div>
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <svg
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      Payment successful
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm leading-5 text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Eius aliquam laudantium explicabo pariatur iste
                        dolorem animi vitae error totam. At sapiente aliquam
                        accusamus facere veritatis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                  <span className="flex w-full rounded-md shadow-sm sm:col-start-2">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    >
                      Deactivate
                    </button>
                  </span>
                  <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:col-start-1">
                    <button
                      type="button"
                      onClick={onClose}
                      className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    >
                      Cancel
                    </button>
                  </span>
                </div>
              </div>
*/
