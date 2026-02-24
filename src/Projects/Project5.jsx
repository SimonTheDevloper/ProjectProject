import { useState } from "react";

function Project5() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);

  return (
    <>
      <div>
        <p>
          Your Count is: <span>{count}</span>
        </p>
        <button onClick={() => setCount(count + amount)}>+</button>
        <button onClick={() => setCount(count - amount)}>-</button>
        <button onClick={() => setCount(0)}>reset</button>
      </div>
    </>
  );
}
export default Project5;
