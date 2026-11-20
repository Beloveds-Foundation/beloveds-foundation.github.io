"use client";
import { redirect } from "next/navigation";
import { useState } from "react";

import { FaCheckCircle } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import { MdError } from "react-icons/md";

const SUCCESSFUL_RESPONSE_MESSAGE =
  "Message successfuly sent! We'll get back to you as soon as possible.";

const ERROR_RESPONSE_MESSAGE =
  "Message failed to send. Please try again later.";

const SENDING_MESSAGE = "Sending...";

enum formStatus {
  unsent, //0
  sending, //1
  error, //2
  success, //3
}

const formResponses: {
  [key: (typeof formStatus)[number]]: {
    icon: React.ReactNode;
    message: string;
  };
} = {
  3: {
    icon: <FaCheckCircle size={70} className="fill-green-500 mb-5" />,
    message: SUCCESSFUL_RESPONSE_MESSAGE,
  },
  2: {
    icon: <MdError size={70} className="fill-red-500 mb-5" />,
    message: ERROR_RESPONSE_MESSAGE,
  },
  1: {
    icon: <RiMailSendLine size={70} className=" mb-5" />,
    message: SENDING_MESSAGE,
  },
};

export const CONTACT_ACCESS_KEY = "";
export const VOLUNTEER_ACCESS_KEY = "";
export const DONATE_SUPPLIES_ACCESS_KEY = "";

export function Form({
  access_key,
  formName,
}: {
  formName: string;
  access_key: string;
}) {
  const [formResult, setFormResult] = useState(formStatus.unsent);
  const onSubmit = async (event: any) => {
    event.preventDefault();
    setFormResult(formStatus.unsent);
    const formData = new FormData(event.target);
    formData.append("access_key", access_key);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setFormResult(formStatus.success);
      event.target.reset();
    } else {
      setFormResult(formStatus.error);
    }
  };

  return (
    <>
      {formResult == formStatus.unsent ? (
        <form onSubmit={onSubmit}>
          <input type="hidden" name="formType" value={formName} />
          <div>
            <legend className="fieldset-legend  required flex flex-col items-center m-1">
              Name *
            </legend>
            <input
              type="text"
              className="input w-full"
              name="name"
              required
              maxLength={30}
            />
          </div>
          <div>
            <legend className="fieldset-legend flex flex-col items-center m-1">
              Email *
            </legend>
            <label className="input validator w-full">
              <input
                type="email"
                placeholder="mail@site.com"
                required
                name="email"
                maxLength={30}
              />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
          <div>
            <legend className="fieldset-legend flex flex-col items-center m-1 ">
              Phone
            </legend>
            <label className="input validator w-full">
              <input
                type="phone"
                placeholder="(000) 000-0000"
                name="phone"
                maxLength={14}
                // only supports US numbers
                pattern="\(?\d{3}\)?-? *\d{3}-? *-?\d{4}"
              />
            </label>
            <div className="validator-hint hidden">
              Enter Vaild Phone Number
            </div>
          </div>

          <div>
            <legend className="fieldset-legend  flex flex-col items-center m-1">
              Message *
            </legend>
            <textarea
              className="textarea h-50 w-full lg:min-w-100 md:min-w-100"
              placeholder="Your messesage goes here"
              name="message"
              required
              maxLength={300}
            ></textarea>
          </div>

          <div className=" mt-5 flex flex-col items-center">
            <button className="btn btn-custom " id="submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      ) : (
        <p className="flex flex-col text-center  items-center">
          {formResponses[formResult].icon}
          {formResponses[formResult].message}
        </p>
      )}
    </>
  );
}
