import { calculateInvestmentResults, formatter } from "../util/investment.js";

export function Results({ formInfo }) {
  const results = calculateInvestmentResults(formInfo);
  const initianInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Interest Value</th>
            <th>Interest (year)</th>
            <th>Interest Total</th>
            <th>Interest Capital</th>
          </tr>
        </thead>
        <tbody>
          {results.map((yearData) => {
            const totalInterest =
              yearData.valueEndOfYear -
              yearData.annualInvestment * yearData.year -
              initianInvestment;
            const totaInvested = yearData.valueEndOfYear - totalInterest;

            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totaInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
