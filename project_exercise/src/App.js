import React, { useEffect } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HappyHour from "./pages/HappyHour";
import Settings from "./pages/Settings";
import Prices from "./pages/Prices";
import Layout from "./components/Layout";
import "./App.css";

function App() {
  const [twoHours, setTwoHours] = useState(false);
  const [pricesToday, setPricesToday] = useState([null]);

  useEffect(() => {
    console.log("App twoHours state: " + twoHours);
  }, [twoHours]);

  useEffect(() => {
    console.log("App prices today: " + pricesToday[0]);
  }, [pricesToday]);

  return (
    <div className="Main">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Prices
                pricesToday={pricesToday}
                setPricesToday={setPricesToday}
              />
            }
          />
          <Route path="HappyHour" element={<HappyHour />} />
          <Route
            path="Settings"
            element={<Settings twoHours={twoHours} setTwoHours={setTwoHours} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
