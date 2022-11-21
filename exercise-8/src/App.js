import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter.js";

function App() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const incrementHandler1 = () => {
    setValue1(value1 + 1);
  };
  const incrementHandler2 = () => {
    setValue2(value2 + 1);
  };
  return (
    <div>
      <Counter value={value1} incrementHandler={incrementHandler2} />
      <Counter value={value2} incrementHandler={incrementHandler1} />
    </div>
  );
}

export default App;
