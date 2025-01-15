import React, { useState } from "react";
const SIPCalculator = () => {
  const [monthlyInv, setMonthlyInv] = useState("");
  const [rate, setRate] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const monthlyInvestment = parseFloat(monthlyInv);
    const annualRate = parseFloat(rate);
    const years = parseFloat(timePeriod);

    const monthlyRate = annualRate / 12 / 100;
    const months = years * 12;
    const totalInvestment = monthlyInvestment * months;
    const futureValue =
      monthlyInvestment *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate);
    const estimatedReturn = futureValue - totalInvestment;

    setResult({
      totalInvestment: totalInvestment.toFixed(2),
      estimatedReturn: estimatedReturn.toFixed(2),
      totalAmount: futureValue.toFixed(2),
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">
          Monthly Investment
        </label>
        <input
          type="number"
          value={monthlyInv}
          onChange={(e) => setMonthlyInv(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">
          Expected Rate of Return (%)
        </label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">
          Time Period (Years)
        </label>
        <input
          type="number"
          value={timePeriod}
          onChange={(e) => setTimePeriod(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        onClick={calculate}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Calculate
      </button>
      {result && (
        <div className="mt-4 p-4 bg-gray-100 rounded space-y-2">
          <p className="text-md font-semibold">
            Total Investment: ₹
            {parseFloat(result.totalInvestment).toLocaleString()}
          </p>
          <p className="text-md font-semibold">
            Estimated Return: ₹
            {parseFloat(result.estimatedReturn).toLocaleString()}
          </p>
          <p className="text-md font-semibold">
            Total Amount: ₹{parseFloat(result.totalAmount).toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
};
export default SIPCalculator;
