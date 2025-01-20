import React, { useState } from "react";

const LumpsumCalculator = () => {
  const [invAmount, setInvAmount] = useState("");
  const [returnRate, setReturnRate] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const initialAmount = parseFloat(invAmount);
    const annualRate = parseFloat(returnRate);
    const years = parseFloat(timePeriod);

    if (
      isNaN(initialAmount) ||
      isNaN(annualRate) ||
      isNaN(years) ||
      initialAmount <= 0 ||
      annualRate <= 0 ||
      years <= 0
    ) {
      setResult({
        maturityAmount: 0,
        status: "Invalid input. Please enter positive values.",
        ok: false,
      });
      return;
    }

    const maturityAmount =
      initialAmount * Math.pow(1 + annualRate / 100, years);

    setResult({
      maturityAmount: maturityAmount.toFixed(2),
      status: "Calculation completed successfully.",
      ok: true,
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">
          Initial Investment
        </label>
        <input
          type="number"
          value={invAmount}
          onChange={(e) => setInvAmount(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">
          Annual Return Rate (%)
        </label>
        <input
          type="number"
          value={returnRate}
          onChange={(e) => setReturnRate(e.target.value)}
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
            Maturity Amount: ₹
            {parseFloat(result.maturityAmount).toLocaleString()}
          </p>
          <p className="text-md font-semibold">
            Status:{" "}
            <span className={result.ok ? "text-green-600" : "text-red-600"}>
              {result.status}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default LumpsumCalculator;
