import React from "react";
import "../styles/Output.css";

const Output = () => {
  return (
    <div className="input-container">
      <div className="nav-container">
        <span>Output</span>
        <button className="clear-btn">Clear</button>
      </div>
      <div className="text-container">
        <textarea className="text-area"></textarea>
      </div>
    </div>
  );
};

export default Output;
