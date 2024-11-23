import React, { useState } from "react";  // Import React and useState
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("");  // Initialize state for the name input

  // Handle changes in the input field
  const handleNameChange = (event) => {
    setName(event.target.value);  // Update state with the input value
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <p>Enter your name:</p>  {/* Prompt message */}
      <input
        type="text"
        value={name}  // Bind input value to the state
        onChange={handleNameChange}  // Update state on input change
        placeholder="Enter your name here"  // Optional placeholder text
      />
      <p>{name ? `Hello ${name}!` : "Hello! Please enter your name."}</p>  {/* Display greeting */}
    </div>
  );
}

export default App;

