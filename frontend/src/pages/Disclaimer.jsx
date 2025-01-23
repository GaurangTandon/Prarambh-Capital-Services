import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

const SectionHeading = ({ icon, title }) => (
  <h2 className="text-2xl font-bold mb-4 text-primary border-b-2 border-blue-300 pb-2">
    <FontAwesomeIcon icon={icon} className="mr-3 text-primary" />
    {title}
  </h2>
);

const disclaimerData = {
  title: "Disclaimer",
  intro: "These are our terms and conditions for usage of the website, Prarambh Capital Services, and the related services offered by Prarambh Capital Services. ('Related Services' hereafter means Stock Market Trading, Mutual Funds, ULIPs, Investment Analysis given through E-Mail, Messenger, Mobile Phone, Mobile SMS, Telephone, or in any other form, manner, or media).",
  sections: [
    {
      heading: "Ownership and Consent",
      content: "Prarambh Capital Services owns Prarambh Capital Services and all its contents & related services. You agree and understand that the information and material contained in this website and the related services offered by Prarambh Capital Services constitute your consent to the terms and conditions mentioned below. You also agree that Prarambh Capital Services can modify or alter the terms and conditions of the use of this service without any liability.",
    },
    {
      heading: "Content and Responsibility",
      content:"The contents of this site & related services offered by Prarambh Capital Services are solely the personal views of the contributors. Prarambh Capital Services reserves the right to make modifications and alterations to the contents of this website. Users are advised to use the data for the purpose of information only and rely on their own judgment while making investment or trading decisions. The investments or trades discussed or recommended in this website & related services offered by Prarambh Capital Services may not be suitable for all investors.",
    },
    {
      heading: "Accuracy and Liability",
      content: "Prarambh Capital Services does not warranty the timeliness, accuracy, or quality of the electronic content and takes no responsibility for any loss or profit arising out of decisions being made by anyone acting on the analysis published on this website.",
    },
    {
      heading: "Restrictions on Use",
      content: "The contents of this website & the related services offered by Prarambh Capital Services cannot be copied, reproduced, republished, uploaded, posted, transmitted, or distributed for any non-personal use without obtaining prior permission from Prarambh Capital Services.",
    },
    {
      heading: "Linked Sites",
      content: "Prarambh Capital Services is not responsible for the contents of any of the linked sites. By providing access to other websites, it is neither recommending nor endorsing the content available on the linked websites. If you do not agree to any of the terms mentioned in this agreement, you should kindly exit the site.",
    },
  ],
};

const Disclaimer = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="bg-white p-8 max-sm:p-4 rounded-xl shadow-lg">
        <SectionHeading icon={faFileAlt} title={disclaimerData.title} />

        <p className="mb-6 text-gray-700 leading-relaxed text-justify">{disclaimerData.intro}</p>

        <div className="space-y-6 text-gray-700">
          {disclaimerData.sections.map((section, index) => (
            <div key={index} className="mb-6">
              <h3 className="font-bold text-lg mb-2">{section.heading}</h3>
              <p className="leading-relaxed text-justify">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-4 text-sm mt-6">
          <strong>Important Notice:</strong> By accessing our services, you
          acknowledge and accept these terms. If you do not agree, please
          discontinue use of our platform.
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;