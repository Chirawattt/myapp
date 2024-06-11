import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const increment = () => {
    setCount(count + step);
  };
  const decrement = () => {
    setCount(count - step);
  };
  const reset = () => {
    setCount(0);
    setStep(1);
  };
  const stepIncrement = () => {
    setStep(step + 1);
  };
  const stepDecrement = () => {
    setStep(step - 1);
  };

  return (
    <>
      <div className="container">
        <h1 className="number">{count}</h1>
        <div className="step-container">
          <button onClick={stepIncrement} className="step-increment">
            +
          </button>
          <p className="step">Step: {step}</p>
          <button onClick={stepDecrement} className="step-decrement">
            -
          </button>
        </div>
      </div>

      <section className="btns-container">
        <button onClick={increment} className="increment">
          +
        </button>
        <button onClick={reset} className="reset">
          Reset
        </button>
        <button onClick={decrement} className="decrement">
          -
        </button>
      </section>
    </>
  );
}

export default Counter;
