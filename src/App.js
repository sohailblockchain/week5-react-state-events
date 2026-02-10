// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// =====================================================
// Week 5: State & Events in React
// Instructor: Sohail Ahmed
// Date: 06 Feb 2026
// Purpose:
// - Understand what State is
// - Learn useState hook
// - Handle events (button clicks)
// - Apply conditional rendering
// =====================================================

import React, { useState } from "react";

/*
  APP COMPONENT
  ----------------
  This is the root component of our React application.
  All other components are rendered inside this component.
*/
function App() {
  return (
    <div style={styles.container}>
      {/* Main Heading */}
      <h1>State & Events in React</h1>

      {/* Counter Component Example */}
      <Counter />

      <hr />

      {/* Toggle Component Example */}
      <Toggle />
    </div>
  );
}

/* =====================================================
   COUNTER COMPONENT
   -----------------------------------------------------
   This component demonstrates:
   1. Numeric state using useState
   2. Event handling using buttons
   3. Conditional rendering based on state
===================================================== */
function Counter() {

  /*
    useState Hook
    ----------------
    count    → current state value
    setCount → function used to update state
    0        → initial value of state
  */
  const [count, setCount] = useState(0);

  return (
    <div style={styles.box}>
      <h2>Counter Example</h2>

      {/* Display current state value */}
      <p>
        Current Count: <strong>{count}</strong>
      </p>

      {/* Event Handling */}
      {/* onClick runs when user clicks the button */}
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      {/* Reset count back to zero */}
      <button onClick={() => setCount(0)}>
        Reset
      </button>

      {/* CONDITIONAL RENDERING */}
      {/* Show message based on count value */}

      {/* If count is greater than 0 */}
      {count > 0 && (
        <p style={{ color: "green" }}>
          Positive Number
        </p>
      )}

      {/* If count is less than 0 */}
      {count < 0 && (
        <p style={{ color: "red" }}>
          Negative Number
        </p>
      )}

      {/* If count is exactly 0 */}
      {count === 0 && (
        <p style={{ color: "gray" }}>
          Zero
        </p>
      )}
    </div>
  );
}

/* =====================================================
   TOGGLE COMPONENT
   -----------------------------------------------------
   This component demonstrates:
   1. Boolean state (true / false)
   2. Toggle logic
   3. Conditional UI using ternary operator
===================================================== */
function Toggle() {

  /*
    Boolean State
    ----------------
    isOn    → current state (true or false)
    setIsOn → function to update state
    false   → initial value
  */
  const [isOn, setIsOn] = useState(false);

  return (
    <div style={styles.box}>
      <h2>Toggle Example</h2>

      {/* Toggle Button */}
      {/* !isOn flips the current value */}
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>

      {/* Conditional Rendering using Ternary Operator */}
      {isOn ? (
        <p style={{ color: "green" }}>
          The switch is ON
        </p>
      ) : (
        <p style={{ color: "red" }}>
          The switch is OFF
        </p>
      )}
    </div>
  );
}

/* =====================================================
   INLINE STYLES
   -----------------------------------------------------
   Inline styles are written in JavaScript.
   Useful for demos and small projects.
   For large projects, use separate CSS files.
===================================================== */
const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial",
  },
  box: {
    marginTop: "20px",
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },
};

export default App;
