import Axios from "axios";
import { Formik } from "formik";
import React, { useContext } from "react";
import * as Yup from "yup";
import { UserContext } from "../../../../context/UserContext";
import { useStatus } from "../../../../hooks/useStatus";
import Spinner from "../../../UI/Spinner";

export const Form = ({ info, handleDone }) => {
  const [status, { loading, resolved }] = useStatus("IDLE");
  const { tempID } = useContext(UserContext);

  const createReply = async (reply) => {
    loading();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    let {
      data: { newReply },
    } = await Axios.post(
      "http://localhost:1337/api/reply/create",
      { ...reply, thread: info._id, createdBy: tempID },
      config
    );

    handleDone(newReply);
    resolved();
  };

  return (
    <Formik
      initialValues={{ reply: "" }}
      onSubmit={function (data, { resetForm }) {
        createReply(data);
        resetForm({ reply: "" });
      }}
      validationSchema={Yup.object().shape({
        reply: Yup.string().required("Required"),
      })}
    >
      {(props) => {
        const {
          values,
          dirty,
          isSubmitting,
          handleChange,
          handleSubmit,
        } = props;

        return (
          <form className="flex items-center w-full" onSubmit={handleSubmit}>
            <textarea
              id="reply"
              maxLength="100"
              onChange={handleChange}
              value={values.reply}
              placeholder="You definitely should!"
              className="form-input mr-2 sm:text-md sm:leading-5 w-full"
            />
            <button type="submit" disabled={!dirty || isSubmitting}>
              {status === "LOADING" ? (
                <Spinner className={"w-8"} />
              ) : (
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="reply md:w-6 md:h-6 w-4 h-4 text-blue-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </form>
        );
      }}
    </Formik>
  );
};
