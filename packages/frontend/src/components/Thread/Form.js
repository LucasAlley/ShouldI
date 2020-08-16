import Axios from "axios";
import { Formik } from "formik";
import React, { useContext } from "react";
import * as Yup from "yup";
import { UserContext } from "../../context/UserContext";
import { useStatus } from "../../hooks/useStatus";
import Spinner from "../ui/Spinner";
export const Form = ({ close }) => {
  const { tempID, setThreads, threads } = useContext(UserContext);
  const [status, { loading, resolved }] = useStatus("IDLE");
  const createThread = async (question) => {
    loading();
    const {
      data: { thread },
    } = await Axios.post("http://localhost:1337/api/thread/create", question);
    setThreads([thread, ...threads]);
    resolved();
  };

  return (
    <Formik
      initialValues={{ question: "" }}
      onSubmit={async function (data, { setErrors }) {
        if (data.question.slice(0, 8) !== "Should I") {
          return setErrors({
            question: "Question Should Start With : Should I",
          });
        }
        createThread({ ...data, createdBy: tempID });

        close();
      }}
      validationSchema={Yup.object().shape({
        question: Yup.string().required("Required"),
      })}
    >
      {(props) => {
        const {
          values,
          dirty,
          errors,
          isSubmitting,
          handleChange,
          handleSubmit,
        } = props;

        return (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center px-4">
              <textarea
                id="question"
                className="form-input ml-2 mr-2 sm:text-sm sm:leading-5 w-full"
                maxLength="100"
                onChange={handleChange}
                value={values.question}
                placeholder="Should I get a tatoo?"
              />
              {errors.question && (
                <span className="bg-red-200 mt-2 text-red-700 py-2 px-2 w-full rounded shadow-sm">
                  {errors.question}
                </span>
              )}
            </div>

            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse bg-gray-50 py-2 px-2">
              <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                <button
                  type="submit"
                  disabled={!dirty || isSubmitting}
                  className="inline-flex justify-center items-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-700 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-400 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                >
                  Submit
                  {status === "LOADING" && (
                    <Spinner stroke={"#fff"} className={"w-4 ml-2"} />
                  )}
                </button>
              </span>
              <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                <button
                  onClick={close}
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                >
                  Cancel
                </button>
              </span>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};
