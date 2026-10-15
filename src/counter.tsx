import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const headelCounter = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>counter</h3>
      <p>Current Value: {count}</p> 
      <button onClick={headelCounter}>increase</button>
    </div>
  );
}
