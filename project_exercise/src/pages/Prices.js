import React from "react";
import { useEffect, useState } from "react";
import {
  getDateTodayAndTomorrow,
  getCurrentPrices,
} from "../components/Functions";
import PriceList from "../components/PriceList";
import "./Prices.css";

export default function Prices(props) {
  const [pricesToday, setPricesToday] = useState([null]);
  const [pricesTomorrow, setPricesTomorrow] = useState([null]);

  let [dateToday, dateTomorrow] = getDateTodayAndTomorrow();
  console.log(props.texti);
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

  // useEffect(() => {
  //   console.log("type of prices today: " + pricesTomorrow[0]);
  // }, [pricesToday]);

  return (
    <main className="Main">
      <div className="float-container">
        <div className="float-child">
          <h5>Prices Today</h5>
          {pricesToday && <PriceList pricesTime={pricesToday} preKey="today" />}
        </div>
        <div className="float-child">
          <h5>Prices Tomorrow</h5>

          {pricesTomorrow && (
            <PriceList pricesTime={pricesTomorrow} preKey="tomorrow" />
          )}
        </div>
      </div>
    </main>
  );
}
