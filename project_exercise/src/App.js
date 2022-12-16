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
  getSettings,
  storeSettings,
} from "./components/Functions";

function App() {
  const [twoHoursProgram, setTwoHoursProgram] = useState(false);
  const [threeHoursProgram, setThreeHoursProgram] = useState(false);
  let [dateToday, dateTomorrow] = getDateTodayAndTomorrow();
  const [pricesToday, setPricesToday] = useState([null]);
  const [pricesTomorrow, setPricesTomorrow] = useState([null]);
  const [settingsArrived, setSettingsArrived] = useState(false);
  // useEffect(() => {
  //   console.log("app twoHoursProgram: " + twoHoursProgram);
  // }, [twoHoursProgram]);

  // useEffect(() => {
  //   console.log("app threeHoursProgram: " + threeHoursProgram);
  // }, [threeHoursProgram]);

  useEffect(() => {
    //storeSettings(twoHoursProgram, threeHoursProgram);
    getSettings(setTwoHoursProgram, setThreeHoursProgram, setSettingsArrived);

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

  useEffect(() => {
    if (settingsArrived) {
      storeSettings(twoHoursProgram, threeHoursProgram);
    }
  }, [twoHoursProgram, threeHoursProgram]);

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
          <Route
            path="HappyHour"
            element={
              <HappyHour
                twoHoursProgram={twoHoursProgram}
                threeHoursProgram={threeHoursProgram}
                pricesToday={pricesToday}
                pricesTomorrow={pricesTomorrow}
                setTwoHoursProgram={setTwoHoursProgram}
                setThreeHoursProgram={setThreeHoursProgram}
              />
            }
          />
          <Route
            path="Settings"
            element={
              <Settings
                twoHoursProgram={twoHoursProgram}
                threeHoursProgram={threeHoursProgram}
                setTwoHoursProgram={setTwoHoursProgram}
                setThreeHoursProgram={setThreeHoursProgram}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
