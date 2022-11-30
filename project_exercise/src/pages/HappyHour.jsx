import React from "react";
import { ToggleButton } from "react-bootstrap";

export default function Expenses(props) {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>
        {props.twoHours ? "Data needs to be collected" : "Activate settings"}
      </h2>
      <ToggleButton />
    </main>
  );
}
