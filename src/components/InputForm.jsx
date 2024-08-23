import { useState } from "react";

export function InputForm({}) {
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
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Inicial Investment</label>
          <input
            type="number"
            required
            value={formInfo.inicial}
            onChange={(event) => handleChange("inicial", event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            value={formInfo.annual}
            required
            onChange={(event) => handleChange("annual", event.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expectet Return</label>
          <input
            type="number"
            required
            value={formInfo.expected}
            onChange={(event) => handleChange("expected", event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            required
            value={formInfo.duration}
            onChange={(event) => handleChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
