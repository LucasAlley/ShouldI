import React from "react";
import Modal from "../UI/Modal";
import { Form } from "./Form";
export const Create = ({ openModal, close }) => {
  return (
    <Modal open={openModal} onClose={close}>
      <div className="px-4 mb-2">
        <h2 className="text-gray-700 italic font-semibold text-xl">
          Should You?
        </h2>
        <h3 className="text-gray-500">
          Submit your question below starting with{" "}
          <span className="text-blue-700 italic">"Should I"</span>
          and await the opinion of the internet.
        </h3>
      </div>

      <Form close={close} />
    </Modal>
  );
};
