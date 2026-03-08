import { useState } from "react";
import InputField from "./components/InputField";
import "./styles/App.css";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const handleNumberChange = (e) => {
    if (Number(e.target.value)) {
      setNumber(Number(e.target.value));
    }
  };
  const btnClickHandler = () => {
    setCount(number);
    setNumber(0);
  };
  const countIncreaseHandler = () => setCount((prev) => prev + 1);
  const countDecreaseHandler = () => setCount((prev) => prev - 1);
  const countResetHandler = () => setCount(0);

  return (
    <div className="App">
      <div className="counter-container">
        <h1 className="header">Counter</h1>
        <p className="result">Count is {count}</p>
        <div className="action-btns">
          <Button title="Increase" onClick={countIncreaseHandler} />
          <Button title="Decrease" onClick={countDecreaseHandler} />
          <Button title="Reset" onClick={countResetHandler} />
        </div>
        <div className="set-count-wrapper">
          <InputField
            type="text"
            placeholder="Enter number"
            required={false}
            value={number}
            onChange={handleNumberChange}
          />
          <Button title={`Set to ${number}`} onClick={btnClickHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
