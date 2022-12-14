import React from "react";
import { ToggleButton } from "react-bootstrap";

export default function Expenses(props) {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>
        {props.twoHoursProgram ? "2h activated" : "Activate 2h on settings"}
      </h2>
      <h2>
        {props.threeHoursProgram ? "3h activated" : "Activate 3h on settings"}
      </h2>
    </main>
  );
}
