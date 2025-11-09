import React, { useState } from "react";

const SWPCalculator = () => {
  const [invAmount, setInvAmount] = useState("");
  const [returnRate, setReturnRate] = useState("");
  const [monthlyWithdrawal, setMonthlyWithdrawal] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const initialAmount = parseFloat(invAmount);
    const annualRate = parseFloat(returnRate);
    const withdrawal = parseFloat(monthlyWithdrawal);
    const years = parseFloat(timePeriod);

    // ✅ Validation
    if (
      isNaN(initialAmount) ||
      isNaN(annualRate) ||
      isNaN(withdrawal) ||
      isNaN(years) ||
      initialAmount <= 0 ||
      annualRate < 0 ||
      withdrawal <= 0 ||
      years <= 0
    ) {
      alert("Please enter valid positive numbers for all fields.");
      return;
    }

    const monthlyRate = annualRate / 12 / 100;
    const months = years * 12;
    let balance = initialAmount;
    let totalWithdrawn = 0;

    for (let i = 0; i < months; i++) {
      if (balance <= 0) {
        setResult({
          finalBalance: 0,
          totalWithdrawn: totalWithdrawn.toFixed(2),
          status: "SWP ended early as balance was exhausted.",
          ok: false,
        });
        return;
      }

      const actualWithdrawal = Math.min(withdrawal, balance);
      balance -= actualWithdrawal;
      totalWithdrawn += actualWithdrawal;

      balance = balance * (1 + monthlyRate);
    }

    setResult({
      finalBalance: balance.toFixed(2),
      totalWithdrawn: totalWithdrawn.toFixed(2),
      status: "SWP completed successfully with remaining balance.",
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
          placeholder="e.g. 500000"
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
          placeholder="e.g. 10"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">
          Monthly Withdrawal
        </label>
        <input
          type="number"
          value={monthlyWithdrawal}
          onChange={(e) => setMonthlyWithdrawal(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="e.g. 10000"
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
          placeholder="e.g. 10"
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
            Final Balance: ₹{parseFloat(result.finalBalance).toLocaleString()}
          </p>
          <p className="text-md font-semibold">
            Total Withdrawn: ₹
            {parseFloat(result.totalWithdrawn).toLocaleString()}
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

export default SWPCalculator;
