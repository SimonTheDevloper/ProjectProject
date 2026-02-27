import { useState } from "react";
import CounterBtn from "./CounterBtn.jsx";

function Project5() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);
  const [error, setError] = useState(null);
  const maxLimitAmount = 100;

  const BtnListe = [
    { label: "+", action: () => setCount((a) => a + 1) },
    { label: "-", action: () => setCount((a) => a - 1) },
    { label: "reset", action: () => setCount(0) },
    { label: "+10", action: () => setCount((a) => a + 10) },
    { label: "-10", action: () => setCount((a) => a - 10) },
    { label: "x 10", action: () => setCount((a) => a * 10) },
    { label: "/ 10", action: () => setCount((a) => a / 10) },
    {
      label: "random",
      action: () => setCount(Math.floor(Math.random() * 100)),
    },
    { label: "half", action: () => setCount((a) => a / 2) },
    { label: "round off", action: () => setCount((a) => Math.abs(a)) },
    { label: "round up", action: () => setCount((a) => Math.ceil(a)) },
    { label: "10%", action: () => setCount((a) => a * 0.1) },
  ];
  const handleOnChange = (e) => {
    const value = Number(e.target.value);

    if (value > maxLimitAmount) {
      setError(`Stop! max Amount is ${maxLimitAmount}`);
      setAmount(maxLimitAmount);
    } else {
      setError("");
      setAmount(value);
    }
  };
  return (
    <main className="prot5">
      <div className="counter">
        <p>
          Your Count is: <span>{count}</span>
        </p>

        <div className="buttons">
          {BtnListe.map((item, index) => (
            <CounterBtn key={index} text={item.label} onClick={item.action} />
          ))}
        </div>

        <div className="amount">
          <p>Step size:</p>
          <input type="number" value={amount} onChange={handleOnChange} />
          {error && <p>{error}</p>}
        </div>
      </div>
    </main>
  );
}

export default Project5;
