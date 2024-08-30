import { Header } from "./components/Header.jsx";
import { InputForm } from "./components/InputForm.jsx";
import { Results } from "./components/Results.jsx";
import { useState } from "react";

function App() {
  const [formInfo, setFormInfo] = useState({
    inicial: 0,
    annual: 0,
    expected: 0,
    duration: 0,
  });

  function handleChange(inputId, newValue) {
    setFormInfo((prevInput) => {
      return { ...prevInput, [inputId]: newValue };
    });
  }
  return (
    <>
      <Header />
      <InputForm onChange={handleChange} formInfo={formInfo} />
      <Results formInfo={formInfo} />
    </>
  );
}

export default App;
