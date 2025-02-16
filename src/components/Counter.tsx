import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      &nbsp;Count: {count} <br></br>
      <br></br>&nbsp;
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      &nbsp;&nbsp;
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
