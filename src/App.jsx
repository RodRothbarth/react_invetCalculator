import { Header } from "./components/Header.jsx";
import { InputForm } from "./components/InputForm.jsx";
import { Results } from "./components/Results.jsx";
import { useState } from "react";

function App() {
  const [formInfo, setFormInfo] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const validInput =
    formInfo.duration > 0 ? (
      <Results formInfo={formInfo} />
    ) : (
      <p className="center">Please Insert duration grewater than ZERO</p>
    );

  function handleChange(inputId, newValue) {
    setFormInfo((prevInput) => {
      return { ...prevInput, [inputId]: +newValue };
    });
  }
  return (
    <>
      <Header />
      <InputForm onChange={handleChange} formInfo={formInfo} />
      {validInput}
    </>
  );
}

export default App;
