import React, { useState } from "react";

import { FaWindowClose } from "react-icons/fa";
import ThankYou from "./Thankyou";
import ContactForm from "./ContactForm";

const PopUp = ({ close }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  return (
    <div className="w-screen">
      <div className="md:max-w-[50%] xl:max-w-[40%] w-full mx-auto">
        <div
          className={`${
            submitted ? "bg-transparent" : "bg-white py-8 px-6"
          } shadow rounded-lg`}
        >
          <div className="flex items-center justify-between bg-white p-2 rounded-tl-md rounded-tr-md">
            <div className="text-center w-full">Contact Us</div>
            <button className="ml-auto text-3xl" onClick={close}>
              <FaWindowClose />
            </button>
          </div>
          {submitted ? (
            <ThankYou close={close} />
          ) : (
            <ContactForm
              submitted={submitted}
              setSubmitted={setSubmitted}
              isFetching={isFetching}
              setIsFetching={setIsFetching}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PopUp;
