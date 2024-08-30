import { calculateInvestmentResults } from "../util/investment.js";

export function Results({ formInfo }) {
  const results = calculateInvestmentResults(formInfo);
  console.log(results);
  return (
    <>
      <div>{}</div>
    </>
  );
}
