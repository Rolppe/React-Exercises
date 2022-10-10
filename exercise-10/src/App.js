import React, { useState } from "react";
import "./App.css";

function App() {
  const [error, setError] = useState(null);
  const [joke, setJoke] = useState("");

  const fetchDataHandler = async () => {
    try {
      const response = await fetch("https://api.chucknorris.io/jokes/random/");

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      setJoke(data.value);
      //console.log({ joke });
    } catch (error) {
      setError(error.message);
    }
  };
  let content;
  error ? (content = error) : (content = joke);
  return (
    <div className="App">
      <header>Chuck Norris vitsit</header>
      <button onClick={fetchDataHandler}>Uusi vitsi</button>
      <div>{content}</div>
    </div>
  );
}

export default App;
