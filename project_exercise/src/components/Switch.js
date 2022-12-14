import React from "react";
import "./Switch.css";

const Switch = ({ checked, onChange }) => (
  <label className="switch">
    <input type="checkbox" checked={checked} onChange={onChange} />

    <span className="slider round"></span>
  </label>
);

export default Switch;
