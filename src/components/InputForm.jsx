export function InputForm({ onChange, formInfo }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Inicial Investment</label>
          <input
            type="number"
            required
            value={formInfo.inicial}
            onChange={(event) => onChange("inicial", event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            value={formInfo.annual}
            required
            onChange={(event) => onChange("annual", event.target.value)}
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
            onChange={(event) => onChange("expected", event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            required
            value={formInfo.duration}
            onChange={(event) => onChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
