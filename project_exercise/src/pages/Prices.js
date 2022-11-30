import React from "react";
import { useEffect, useState } from "react";
import {
  getDateTodayAndTomorrow,
  getCurrentPrices,
} from "../components/Functions";
import PriceList from "../components/PriceList";

export default function Prices(props) {
  const [pricesToday, setPricesToday] = useState([null]);

  let [dateToday, dateTomorrow] = getDateTodayAndTomorrow();

  useEffect(() => {
    fetch("https://ohjelmistoprojekti-production.up.railway.app/pricejson/")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setPricesToday(getCurrentPrices(dateToday, data));
      })
      .then(() => {});
  }, []);

  // useEffect(() => {
  //   console.log("type of prices today: " + pricesToday[0]);
  // }, [pricesToday]);

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Prices</h2>
      <ul>
        {pricesToday && <PriceList pricesToday={pricesToday} preKey="today" />}
      </ul>
    </main>
  );
}
