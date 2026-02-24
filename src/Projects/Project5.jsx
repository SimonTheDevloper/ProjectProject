import { useState } from "react";
import CounterBtn from "./CounterBtn.jsx";

function Project5() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);

  function increase() {
    setCount(count + amount);
  }

  function decrease() {
    setCount(count - amount);
  }

  function reset() {
    setCount(0);
  }

  function double() {
    setCount(count * 2);
  }
  function square() {
    setCount(count * count);
  }

  return (
    <div className="counter">
      <p>
        Your Count is: <span>{count}</span>
      </p>

      <div className="buttons">
        <CounterBtn text="+" onClick={increase} />
        <CounterBtn text="-" onClick={decrease} />
        <CounterBtn text="Reset" onClick={reset} />
        <CounterBtn text="double" onClick={double} />
        <CounterBtn text="toSquare" onClick={square} />
      </div>

      <div className="amount">
        <p>Step size:</p>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

export default Project5;
