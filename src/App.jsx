import React, { useRef, useState, useEffect } from "react";
// useRef can be used to store the previous value of a state without causing a re-render.

function App() {
  // Example 1
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  // Example 2
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    countRef.current = countRef.current + 1;
    console.log("useRef count:", countRef.current);
  };

  // Example 3
  const timerRef = useRef(null);
  const [seconds, setSeconds] = useState(0);

  const startTimer = () => {
    if(!timerRef.current) {
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTimer =() => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  // Example 4
  const previousCount = useRef(0);

  const [number, setNumber] = useState(0);

  const handleNumberChange = () => {
  previousCount.current = number;
  setNumber(number + 1);
  };

  // Example 5
  const renderCount = useRef(0);
  renderCount.current = renderCount.current + 1;

  // Example 6
  const previousNumber = useRef(0);

  useEffect(() => {
  previousNumber.current = number;
  }, [number]);

  // Example 7
  const sectionRef = useRef();

  const scrollToSection = () => {
  sectionRef.current.scrollIntoView({
    behavior: "smooth",
  });
  };

  // Example 8
  const secretValue = useRef(0);

  const changeSecretValue = () => {
  secretValue.current = secretValue.current + 1;
  console.log("Secret value:", secretValue.current);
  };

  return (
    <div>
      {/* Example 1 */}
      <h1>useRef Example 1</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name"
      />

      <button onClick={handleFocus}>
        Focus Input
      </button>

      {/* Example 2 */}
      <h2>useRef Example 2</h2>

      <button onClick={handleClick}>
        Click Me
      </button>

      <p>State count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        State Count
      </button>

      {/* Example 3 */}
      <h2>useRef Example 3 - Timer</h2>

      <p>Seconds: {seconds}</p>

      <button onClick={startTimer}>
        Start Timer
      </button>

        <button onClick={stopTimer}>
          Stop Timer
        
        </button>

        {/* Example 4 */}
      <h2>useRef Example 4 - Previous Value</h2>

      <p>Current Value: {number}</p>

      <p>Previous Value: {previousCount.current}</p>

      <button onClick={handleNumberChange}>
        Increase Number
      </button>

      {/* Example 5 */}
      <h2>useRef Example 5 - Render Count</h2>

      <p>Component rendered: {renderCount.current} times</p>

      <button onClick={() => setNumber(number + 1)}>
        Re-render Component
      </button>

      {/* Example 6 */}
      <h2>useRef Example 6 - Previous Value</h2>

      <p>Current Number: {number}</p>
      <p>Previous Number: {previousNumber.current}</p>

      <button onClick={() => setNumber(number + 1)}>
       Increase Number
      </button>

      {/* Example 7 */}
      <h2>useRef Example 7 - Scroll</h2>

      <button onClick={scrollToSection}>
       Scroll to Section
      </button>

      <div style={{ height: "500px" }}>
      <p>Scroll down...</p>
      </div>

      <div ref={sectionRef}>
      <h2>You reached the section! 🎯</h2>
      </div>

      {/* Example 8 */}
      <h2>useRef Example 8 - Stored Value</h2>

      <button onClick={changeSecretValue}>
       Change Secret Value
      </button>
    </div>
  );
}

export default App;