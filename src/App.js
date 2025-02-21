import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("June 21 2027");
  date.setDate(date.getDate() + count);

  function handleStepIncrease() {
    setStep((s) => s + 1);
  }

  function handleStepDecrease() {
    setStep((s) => s - 1);
  }

  function handleCountIncrease() {
    setCount((c) => c + step);
  }

  function handleCountDecrease() {
    setCount((c) => c - step);
  }
  return (
    <div>
      <div>
        {/* <button onClick={handleStepDecrease}>-</button>
        <span>Step:</span>
        <span>{step}</span>
        <button onClick={handleStepIncrease}>+</button> */}

        <input type="range" min={0} value={step} max={10} />
      </div>
      <div>
        <button onClick={handleCountDecrease}>-</button>
        {/* <span>Count:</span>
        <span>{count}</span> */}
        <input type="text" placeholder="" />
        <button onClick={handleCountIncrease}>+</button>
        <p>
          <span>
            {count === 0
              ? "Today is :"
              : count > 0
              ? `${count} days from today is :`
              : `${Math.abs(count)} days ago was :`}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
    </div>
  );
}
