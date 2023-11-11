import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { useEffect, useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 0,
  });
  const validUserInput = userInput.duration >= 1;

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((preUserInput) => {
      return {
        ...preUserInput,
        [inputIdentifier]: newValue,
      };
    });
  };
  return (
    <>
      <Header />
      <UserInput handleChange={handleChange} userInput={userInput} />
      {validUserInput && <Result input={userInput} />}
      {!validUserInput && <p className="center">Please enter valid duration</p>}
    </>
  );
}

export default App;
