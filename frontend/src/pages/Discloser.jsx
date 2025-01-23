import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyCheckAlt,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const SectionHeading = ({ icon, title }) => (
  <h2 className="text-2xl font-bold mb-4 text-primary border-b-2 border-blue-300 pb-2">
    <FontAwesomeIcon icon={icon} className="mr-3 text-primary" />
    {title}
  </h2>
);

const Disclosure = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="bg-white p-8 max-sm:p-4 rounded-xl shadow-lg">
        <SectionHeading icon={faMoneyCheckAlt} title="Disclosure" />

        <div className="overflow-x-auto">
          <table className="w-full border-collapse mb-6">
            <thead className="bg-blue-100">
              <tr>
                <th className="border p-3 text-left">Scheme Type</th>
                <th className="border p-3">Trail 1st Year (%)</th>
                <th className="border p-3">Trail 2nd Year Onwards (%)</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  type: "Overnight and Liquid Funds",
                  trail1: "0.02 -- 0.25",
                  trail2: "0.02 -- 0.25",
                },
                {
                  type: "Money Market Funds",
                  trail1: "0.03 -- 0.90",
                  trail2: "0.03 -- 0.90",
                },
                {
                  type: "Duration & Credit Risk Funds",
                  trail1: "0.05 -- 1.40",
                  trail2: "0.05 -- 1.20",
                },
                {
                  type: "Banking & PSU Debt Funds",
                  trail1: "0.10 -- 1.15",
                  trail2: "0.10 -- 0.95",
                },
                {
                  type: "Fixed Maturity Plans",
                  trail1: "0.05 -- 0.10",
                  trail2: "0.02 -- 0.05",
                },
                {
                  type: "Hybrid Funds",
                  trail1: "0.10 -- 1.70",
                  trail2: "0.10 -- 1.70",
                },
                {
                  type: "Gold Funds",
                  trail1: "0.07 -- 0.40",
                  trail2: "0.07 -- 0.40",
                },
                {
                  type: "Equity Funds",
                  trail1: "0.35 -- 1.80",
                  trail2: "0.35 -- 1.75",
                },
                {
                  type: "Index Funds",
                  trail1: "0.02 -- 0.50",
                  trail2: "0.02 -- 0.50",
                },
                {
                  type: "Arbitrage Funds",
                  trail1: "0.25 -- 0.70",
                  trail2: "0.25 -- 0.70",
                },
              ].map((scheme, index) => (
                <tr key={index} className="hover:bg-blue-50">
                  <td className="border p-3">{scheme.type}</td>
                  <td className="border p-3 text-center">{scheme.trail1}</td>
                  <td className="border p-3 text-center">{scheme.trail2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm italic">
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="mr-2 text-primary"
            />
            Commission details are available upon request with our Relationship
            Managers. Rates are updated as actual rates are received from Asset
            Management Companies (AMCs).
          </p>
        </div>
      </div>
    </div>
  );
};
export default Disclosure;
