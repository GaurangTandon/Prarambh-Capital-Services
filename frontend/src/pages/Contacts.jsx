import React, { useState } from "react";
import ThankYou from "@/components/Contacts/Thankyou";
import ContactForm from "../components/Contacts/ContactForm";

const Contacts = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  
  if (submitted) {
    return <ThankYou />;
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="md:max-w-[50%] xl:max-w-[40%] mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Contact Us</h2>
          <p className="mt-2 text-sm text-gray-200">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>

        <div className="mt-8">
          <div className="bg-white py-8 px-6 shadow rounded-lg">
            <ContactForm
              submitted={submitted}
              setSubmitted={setSubmitted}
              isFetching={isFetching}
              setIsFetching={setIsFetching}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
