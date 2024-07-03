import React from "react";
import "../styles/Input.css";
import { MdFullscreen } from "react-icons/md";
import { CiDark } from "react-icons/ci";

const Input = () => {
  return (
    <div className="input-container">
      <div className="navbar-container">
        <div className="left-container">
          <span>Main.js</span>
        </div>

        <div className="right-container">
          <button className="run-btn">Run</button>
          <button>
            <CiDark  className="icon"/>
          </button>
          <button>
            <MdFullscreen className="icon"/>
          </button>
        </div>
      </div>
      <div className="text-container">
        <textarea className="text-area"></textarea>
      </div>
    </div>
  );
};

export default Input;
