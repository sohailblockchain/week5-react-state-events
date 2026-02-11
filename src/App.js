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


// // =====================================================
// // Week 5: State & Events in React
// // Instructor: Sohail Ahmed
// // Date: 06 Feb 2026
// // Purpose:
// // - Understand what State is
// // - Learn useState hook
// // - Handle events (button clicks)
// // - Apply conditional rendering
// // =====================================================

// import React, { useState } from "react";

// /*
//   APP COMPONENT
//   ----------------
//   This is the root component of our React application.
//   All other components are rendered inside this component.
// */
// function App() {
//   return (
//     <div style={styles.container}>
//       {/* Main Heading */}
//       <h1>State & Events in React</h1>

//       {/* Counter Component Example */}
//       <Counter />

//       <hr />

//       {/* Toggle Component Example */}
//       <Toggle />
//     </div>
//   );
// }

// /* =====================================================
//    COUNTER COMPONENT
//    -----------------------------------------------------
//    This component demonstrates:
//    1. Numeric state using useState
//    2. Event handling using buttons
//    3. Conditional rendering based on state
// ===================================================== */
// function Counter() {

//   /*
//     useState Hook
//     ----------------
//     count    → current state value
//     setCount → function used to update state
//     0        → initial value of state
//   */
//   const [count, setCount] = useState(0);

//   return (
//     <div style={styles.box}>
//       <h2>Counter Example</h2>

//       {/* Display current state value */}
//       <p>
//         Current Count: <strong>{count}</strong>
//       </p>

//       {/* Event Handling */}
//       {/* onClick runs when user clicks the button */}
//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>

//       <button onClick={() => setCount(count - 1)}>
//         Decrease
//       </button>

//       {/* Reset count back to zero */}
//       <button onClick={() => setCount(0)}>
//         Reset
//       </button>

//       {/* CONDITIONAL RENDERING */}
//       {/* Show message based on count value */}

//       {/* If count is greater than 0 */}
//       {count > 0 && (
//         <p style={{ color: "green" }}>
//           Positive Number
//         </p>
//       )}

//       {/* If count is less than 0 */}
//       {count < 0 && (
//         <p style={{ color: "red" }}>
//           Negative Number
//         </p>
//       )}

//       {/* If count is exactly 0 */}
//       {count === 0 && (
//         <p style={{ color: "gray" }}>
//           Zero
//         </p>
//       )}
//     </div>
//   );
// }

// /* =====================================================
//    TOGGLE COMPONENT
//    -----------------------------------------------------
//    This component demonstrates:
//    1. Boolean state (true / false)
//    2. Toggle logic
//    3. Conditional UI using ternary operator
// ===================================================== */
// function Toggle() {

//   /*
//     Boolean State
//     ----------------
//     isOn    → current state (true or false)
//     setIsOn → function to update state
//     false   → initial value
//   */
//   const [isOn, setIsOn] = useState(false);

//   return (
//     <div style={styles.box}>
//       <h2>Toggle Example</h2>

//       {/* Toggle Button */}
//       {/* !isOn flips the current value */}
//       <button onClick={() => setIsOn(!isOn)}>
//         {isOn ? "Turn OFF" : "Turn ON"}
//       </button>

//       {/* Conditional Rendering using Ternary Operator */}
//       {isOn ? (
//         <p style={{ color: "green" }}>
//           The switch is ON
//         </p>
//       ) : (
//         <p style={{ color: "red" }}>
//           The switch is OFF
//         </p>
//       )}
//     </div>
//   );
// }

// /* =====================================================
//    INLINE STYLES
//    -----------------------------------------------------
//    Inline styles are written in JavaScript.
//    Useful for demos and small projects.
//    For large projects, use separate CSS files.
// ===================================================== */
// const styles = {
//   container: {
//     padding: "20px",
//     fontFamily: "Arial",
//   },
//   box: {
//     marginTop: "20px",
//     padding: "15px",
//     border: "1px solid #ccc",
//     borderRadius: "6px",
//   },
// };

// export default App;



// =====================================================
// Week 7: Lists & Forms in React
// Topic: Rendering Lists, Keys, Controlled Components
// Practical Lab: React Task Manager (A4)
// Instructor: Sohail Ahmed
// =====================================================

import React, { useState } from "react";

function App() {

  // =========================
  // STATE
  // =========================

  // Stores input field value (controlled component)
  const [taskInput, setTaskInput] = useState("");

  // Stores all tasks in array
  const [tasks, setTasks] = useState([]);

  // =========================
  // ADD TASK FUNCTION
  // =========================
  const addTask = (e) => {
    e.preventDefault(); // Prevent page reload

    if (taskInput.trim() === "") return;

    const newTask = {
      id: Date.now(), // Unique key
      text: taskInput,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskInput(""); // Clear input
  };

  // =========================
  // DELETE TASK
  // =========================
  const deleteTask = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  };

  // =========================
  // TOGGLE COMPLETE
  // =========================
  const toggleComplete = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div style={styles.container}>
      <h1>React Task Manager</h1>

      {/* =========================
           FORM SECTION
      ========================== */}
      <form onSubmit={addTask} style={styles.form}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.addButton}>
          Add Task
        </button>
      </form>

      {/* =========================
           TASK LIST SECTION
      ========================== */}
      <ul style={styles.list}>
        {tasks.map(task => (
          <li
            key={task.id} // IMPORTANT: Unique key
            style={{
              ...styles.listItem,
              textDecoration: task.completed ? "line-through" : "none"
            }}
          >
            <span onClick={() => toggleComplete(task.id)}>
              {task.text}
            </span>

            <button
              onClick={() => deleteTask(task.id)}
              style={styles.deleteButton}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Empty state message */}
      {tasks.length === 0 && <p>No tasks added yet.</p>}
    </div>
  );
}

// =========================
// SIMPLE INLINE STYLES
// =========================
const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "Arial",
    textAlign: "center"
  },
  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px"
  },
  input: {
    flex: 1,
    padding: "8px"
  },
  addButton: {
    padding: "8px 12px",
    cursor: "pointer"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    border: "1px solid #ddd",
    marginBottom: "10px",
    borderRadius: "5px"
  },
  deleteButton: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer"
  }
};

export default App;
