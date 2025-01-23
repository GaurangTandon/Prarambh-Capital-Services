import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faUser,
  faLock,
  faLink,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const SectionHeading = ({ icon, title }) => (
  <h2 className="text-2xl font-bold mb-4 text-primary border-b-2 border-blue-300 pb-2">
    <FontAwesomeIcon icon={icon} className="mr-3 text-primary" />
    {title}
  </h2>
);

const privacyPolicyData = {
  title: "Privacy Policy",
  intro: "This privacy policy sets out how Prarambh Capital Services uses and protects any information that you share when you use this website. Prarambh Capital Services is committed to ensuring that your privacy is protected at all times. This policy is effective from January 1, 2025.",
  sections: [
    {
      heading: "Information Collection",
      icon: faUser,
      content: "We may collect the following information:",
      list: [
        "Name and contact details",
        "Personal information, including date of birth, Aadhaar Number, and Permanent Account Number (PAN)",
        "Demographic information such as gender and income",
        "Other information that can help us improve our services",
      ],
    },
    {
      heading: "What We Do With the Information",
      icon: faLock,
      content: "We use the information we gather for the following purposes:",
      list: [
        "To conduct Know-Your-Customer registration as required by SEBI and/or other regulatory bodies",
        "To perform compliance checks and keep/maintain internal records",
        "To use the information to improve our products and services",
        "To periodically send emails about your investments or other information of interest",
        "To contact you for market research purposes",
        "We will not sell, distribute, or lease your personal information unless legally required.",
      ],
    },
    {
      heading: "Security",
      icon: faShieldAlt,
      content: "We are committed to ensuring that your information is secure. To prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures.",
      list: [
        "Passwords are one-way encrypted for high security",
        "All communication is encrypted using the highest standards",
        "Data is stored safely and securely with continuous backups",
        "Data is not shared without explicit consent unless legally required",
      ],
    },
    {
      heading: "Links to Other Websites",
      icon: faLink,
      content: "Our website may contain links to other websites of interest. However, we cannot control the protection and privacy of information on third-party websites. You should exercise caution and review their privacy policies.",
    },
  ],
  footer: "Effective Date: January 1, 2025",
};

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <SectionHeading icon={faShieldAlt} title={privacyPolicyData.title} />

        <p className="mb-6 text-gray-700 leading-relaxed">{privacyPolicyData.intro}</p>

        <div className="space-y-6 text-gray-700">
          {privacyPolicyData.sections.map((section, index) => (
            <section key={index} className="mb-6">
              <h3 className="font-semibold text-xl mb-3">
                <FontAwesomeIcon icon={section.icon} className="mr-2 text-primary" />
                {section.heading}
              </h3>
              <p className="mb-3 text-justify">{section.content}</p>
              {section.list && (
                <ul className="list-disc pl-5 space-y-1">
                  {section.list.map((item, idx) => (
                    <li key={idx} className="text-justify">{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-6">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          You can opt-out of marketing communications at any time. We will never sell or distribute your personal information without explicit consent or legal requirement.
        </div>

        <div className="text-sm text-gray-600 mt-4">{privacyPolicyData.footer}</div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;