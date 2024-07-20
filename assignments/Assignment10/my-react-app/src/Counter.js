import React, { useState } from 'react';

function Counter() {
  // Use useState hook to create a state variable 'count' with initial value 0
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => setCount(count + 1);

  // Function to decrement the count
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
