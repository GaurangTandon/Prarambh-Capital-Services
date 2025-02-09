import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faUserTie,
  faBullseye,
  faRetweet,
  faPiggyBank,
  faShieldAlt,
  faHeartbeat,
  faFileInvoice,
  faBuilding,
  faLandmark,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faUserTie,
    title: "Complete Financial Planning",
    description: "Financial planning for individuals and families.",
  },
  {
    icon: faChartLine,
    title: "Customized Investment Advice",
    description: "Tailored investment solutions.",
  },
  {
    icon: faBullseye,
    title: "Goal Based Financial Planning",
    description: "Achieve financial goals efficiently.",
  },
  {
    icon: faRetweet,
    title: "Retirement Planning",
    description: "Plan for a secure retirement.",
  },
];

const instruments = [
  { icon: faPiggyBank, title: "Mutual Funds" },
  { icon: faShieldAlt, title: "Term Insurance" },
  { icon: faHeartbeat, title: "Health Insurance" },
  { icon: faFileInvoice, title: "Fixed Income Instruments" },
  { icon: faBuilding, title: "Corporate FD" },
  { icon: faLandmark, title: "Sovereign Bonds" },
  { icon: faUniversity, title: "State Government Bonds" },
  { icon: faBuilding, title: "Corporate Bonds (NCD)" },
];

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-white">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4"
          >
            <FontAwesomeIcon
              icon={service.icon}
              className="text-primary text-3xl"
            />
            <div>
              <h2 className="text-lg md:text-xl font-semibold">{service.title}</h2>
              <p className="text-sm md:text-base text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-white">
        Investment Instruments Available With Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {instruments.map((instrument, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4"
          >
            <FontAwesomeIcon
              icon={instrument.icon}
              className="text-primary text-3xl"
            />
            <h2 className="text-lg md:text-xl font-semibold">{instrument.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
