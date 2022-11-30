import React, { useEffect } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HappyHour from "./pages/HappyHour";
import Settings from "./pages/Settings";
import Prices from "./pages/Prices";
import Layout from "./components/Layout";
import "./App.css";
import {
  getDateTodayAndTomorrow,
  getCurrentPrices,
} from "./components/Functions";

function App() {
  const [twoHours, setTwoHours] = useState(false);
  const [pricesToday, setPricesToday] = useState([null]);
  const [pricesTomorrow, setPricesTomorrow] = useState([null]);

  let [dateToday, dateTomorrow] = getDateTodayAndTomorrow();
  useEffect(() => {
    fetch("https://ohjelmistoprojekti-production.up.railway.app/pricejson/")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setPricesToday(getCurrentPrices(dateToday, data));
        setPricesTomorrow(getCurrentPrices(dateTomorrow, data));
        setPricesToday(getCurrentPrices(dateToday, data));
      })
      .then(() => {});
  }, []);

  return (
    <div className="Main">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Prices
                pricesToday={pricesToday}
                pricesTomorrow={pricesTomorrow}
              />
            }
          />
          <Route path="HappyHour" element={<HappyHour twoHours={twoHours} />} />
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
