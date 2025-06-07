import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import React, { useState } from "react";

function RetirementCalculator() {
  const [curAge, setCurAge] = useState();
  const [retAge, setRetAge] = useState();
  const [monthExp, setMonthExp] = useState();
  const [monthSaving, setMonthSaving] = useState();
  const [alreadySave, setAlreadySave] = useState();
  const [inflation, setInflation] = useState();
  const [preReturn, setPreReturn] = useState();
  const [postReturn, setPostReturn] = useState();
  const [result, setResult] = useState(null);
  const [chartData, setChartData] = useState([]);
  function calculate() {
    const yearsToRetire = retAge - curAge;
    const annualExpNow = monthExp * 12;
    const inflatedAnnualExp =
      annualExpNow * Math.pow(1 + inflation / 100, yearsToRetire);

    const retirementYears = 25;
    const postRetRate = postReturn / 100;
    const corpusNeeded =
      inflatedAnnualExp *
      ((1 - Math.pow(1 + postRetRate, -retirementYears)) / postRetRate);

    const monthlyRatePre = preReturn / 100 / 12;
    const totalMonths = yearsToRetire * 12;
    const futureMonthlySavings =
      monthSaving *
      (((Math.pow(1 + monthlyRatePre, totalMonths) - 1) / monthlyRatePre) *
        (1 + monthlyRatePre));

    const futureExistingSaving =
      alreadySave * Math.pow(1 + preReturn / 100, yearsToRetire);
    const totalAtRetirement = futureMonthlySavings + futureExistingSaving;

    const shortfall = corpusNeeded - totalAtRetirement;

    let lumpSumNow = 0;
    let extraPerMonth = 0;

    if (shortfall > 0) {
      lumpSumNow = shortfall / Math.pow(1 + preReturn / 100, yearsToRetire);
      extraPerMonth =
        shortfall /
        (((Math.pow(1 + monthlyRatePre, totalMonths) - 1) / monthlyRatePre) *
          (1 + monthlyRatePre));
    }

    // Chart data generation (year by year)
    let yearlyData = [];
    let totalSavings = alreadySave;
    for (let i = 0; i <= yearsToRetire; i++) {
      // Add yearly contribution
      totalSavings *= 1 + preReturn / 100;
      totalSavings += monthSaving * 12;
      yearlyData.push({
        age: curAge + i,
        savings: Math.round(totalSavings),
      });
    }

    setChartData(yearlyData);

    setResult({
      yearsToRetire,
      inflatedMonthlyExp: inflatedAnnualExp / 12,
      corpusNeeded,
      futureMonthlySavings,
      futureExistingSaving,
      totalAtRetirement,
      shortfall: shortfall > 0 ? shortfall : 0,
      lumpSumNow: shortfall > 0 ? lumpSumNow : 0,
      extraPerMonth: shortfall > 0 ? extraPerMonth : 0,
    });
  }
  return (
    <>
      <form>
        <label className="block text-sm font-medium mb-1">Current Age</label>
        <input
          type="number"
          value={curAge}
          onChange={(e) => setCurAge(parseInt(e.target.value))}
          className="w-full p-2 border rounded mb-4"
          min={20}
          required
        />
        <label className="block text-sm font-medium mb-1">Retirement Age</label>
        <input
          type="number"
          value={retAge}
          onChange={(e) => setRetAge(parseInt(e.target.value))}
          className="w-full p-2 border rounded mb-4"
          min={parseInt(curAge) + 1}
          required
        />

        <label className="block text-sm font-medium mb-1">
          Monthly Household Expenses in INR
        </label>
        <input
          type="number"
          value={monthExp}
          onChange={(e) => setMonthExp(parseInt(e.target.value))}
          className="w-full p-2 border rounded mb-4"
          required
        />

        <label className="block text-sm font-medium mb-1">
          Estimated Rate of Inflation
        </label>
        <input
          type="number"
          value={inflation}
          onChange={(e) => setInflation(parseFloat(e.target.value))}
          className="w-full p-2 border rounded mb-4"
          required
          min={4}
        />

        <label className="block text-sm font-medium mb-1">
          Current Monthly Saving in INR
        </label>
        <input
          type="number"
          value={monthSaving}
          onChange={(e) => setMonthSaving(parseInt(e.target.value))}
          className="w-full p-2 border rounded mb-4"
          required
          min={0}
        />

        <label className="block text-sm font-medium mb-1">
          Amount already saved in INR
        </label>
        <input
          type="number"
          value={alreadySave}
          onChange={(e) => setAlreadySave(parseInt(e.target.value))}
          className="w-full p-2 border rounded mb-4"
          required
          min={0}
        />

        <label className="block text-sm font-medium mb-1">
          Estimated pre retirement return rate
        </label>
        <input
          type="number"
          value={preReturn}
          onChange={(e) => setPreReturn(parseFloat(e.target.value))}
          className="w-full p-2 border rounded mb-4"
          required
          min={0}
        />
        <label className="block text-sm font-medium mb-1">
          Estimated post retirement return rate
        </label>
        <input
          type="number"
          value={postReturn}
          onChange={(e) => setPostReturn(parseFloat(e.target.value))}
          className="w-full p-2 border rounded mb-4"
          min={0}
          required
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            calculate();
          }}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Calculate
        </button>
      </form>
      {result && (
        <div className="mt-8 p-4 border rounded shadow bg-white">
          <h2 className="text-xl font-semibold mb-4">Retirement Summary</h2>
          <p>
            <strong>Years left for retirement:</strong> {result.yearsToRetire}
          </p>
          <p>
            <strong>Your Monthly household expenses after retirement:</strong> ₹
            {result.inflatedMonthlyExp.toFixed(0)}
          </p>
          <p>
            <strong>Your targeted savings at retirement age:</strong> ₹
            {result.corpusNeeded.toFixed(0)}
          </p>
          <p>
            <strong>
              Amount you will accumulate with current monthly savings:
            </strong>{" "}
            ₹{result.futureMonthlySavings.toFixed(0)}
          </p>
          <p>
            <strong>Your existing savings will grow to:</strong> ₹
            {result.futureExistingSaving.toFixed(0)}
          </p>
          <p>
            <strong>Total savings at the time of retirement:</strong> ₹
            {result.totalAtRetirement.toFixed(0)}
          </p>
          <p>
            <strong>Shortfall in savings:</strong> ₹
            {result.shortfall.toFixed(0)}
          </p>
          <p>
            <strong>
              Extra saving one-time required today to take care of shortfall:
            </strong>{" "}
            ₹{result.lumpSumNow.toFixed(0)}
          </p>
          <p>
            <strong>
              Extra saving per month required to take care of shortfall:
            </strong>{" "}
            ₹{result.extraPerMonth.toFixed(0)}
          </p>
        </div>
      )}
      {chartData.length > 0 && (
        <div className="mt-8 p-4 border rounded shadow bg-white">
          <h2 className="text-xl font-semibold mb-4">Savings Growth Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="age"
                label={{
                  value: "Age",
                  position: "insideBottomRight",
                  offset: -5,
                }}
              />
              <YAxis
                label={{
                  value: "Savings (₹)",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
              <Line
                type="monotone"
                dataKey="savings"
                stroke="#1E90FF"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
}

export default RetirementCalculator;
