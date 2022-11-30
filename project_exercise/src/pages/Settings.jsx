import React from "react";

export default function Settings(props) {
  function chanceState() {
    props.setTwoHours(!props.twoHours);
  }
  return (
    <main style={{ padding: "1rem 0" }}>
      <button onClick={chanceState}>Chache state</button>
      <h2>{props.twoHours && "Settings"}</h2>
    </main>
  );
}
