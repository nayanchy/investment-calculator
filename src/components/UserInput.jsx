const UserInput = ({ handleChange, userInput }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            required
            onChange={(e) => handleChange("initialInvestment", +e.target.value)}
            value={userInput.initialInvestment}
            min="1"
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            required
            onChange={(e) => handleChange("annualInvestment", +e.target.value)}
            value={userInput.annualInvestment}
            min="1"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            required
            onChange={(e) => handleChange("expectedReturn", +e.target.value)}
            value={userInput.expectedReturn}
            min="1"
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            required
            onChange={(e) => handleChange("duration", +e.target.value)}
            value={userInput.duration}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
