import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import calculators from "../components/Calculator/Calculators";

const Calculator = () => {
  const [selectedCalculator, setSelectedCalculator] = useState(
    calculators[0].id
  );

  const SelectedCalculatorComponent =
    calculators.find((calc) => calc.id === selectedCalculator)?.component ||
    calculators[0].component;

  return (
    <div className="min-h-screen flex-col justify-center items-center mb-10 pt-10">
      <div className=" text-white pt-6 px-4 text-center">
        <h1 className="text-3xl max-sm:text-xl font-bold">Smart Money Calculator Suite</h1>
        <p className="text-blue-100 max-sm:text-sm mt-2">
          Your Financial Future, Calculated with Precision
        </p>
      </div>

      <div className="flex justify-center items-start mt-5">
        {/* Mobile View */}
        <div className="md:hidden p-4 w-full flex flex-col items-center">
          <select
            value={selectedCalculator}
            onChange={(e) => setSelectedCalculator(e.target.value)}
            className="max-sm:w-[70%] w-[50%] p-2 mb-8 border rounded-lg bg-white"
          >
            {calculators.map((calc) => (
              <option key={calc.id} value={calc.id}>
                {calc.name}
              </option>
            ))}
          </select>
          <div className="bg-white w-[70%] max-sm:w-full p-4 rounded-lg shadow">
            <SelectedCalculatorComponent />
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden container md:flex md:justify-center">
          {/* Sidebar */}
          <div className="flex-2 p-4 mt-10">
            <h2 className="text-xl font-bold mb-4 text-white">
              Financial Calculators
            </h2>
            <div className="space-y-2">
              {calculators.map((calc) => (
                <button
                  key={calc.id}
                  onClick={() => setSelectedCalculator(calc.id)}
                  className={`w-full p-3 rounded-lg flex items-center space-x-3 ${
                    selectedCalculator === calc.id
                      ? "bg-blue-100 text-blue-600"
                      : "hover:bg-gray-100 hover:text-black text-gray-300"
                  }`}
                >
                  <FontAwesomeIcon icon={calc.icon} className="w-5 h-5" />
                  <span>{calc.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div key={selectedCalculator} className="flex-1 p-8 xl:max-w-[60%]">
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-6">
                {
                  calculators.find((calc) => calc.id === selectedCalculator)
                    ?.name
                }
              </h2>
              <SelectedCalculatorComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
