import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useEffect, useState } from "react";
import {
  getDateTodayAndTomorrow,
  getCurrentPrices,
} from "../components/Functions";
import PriceList from "../components/PriceList";

export default function Home(props) {
  const [priceData, setpriceData] = useState(null);
  const [todayPrices, setTodayPrices] = useState([]);
  const [pricesToday, setPricesToday] = useState([null]);

  let [dateToday, dateTomorrow] = getDateTodayAndTomorrow();
  let pricesTomorrow = null;

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

  useEffect(() => {
    console.log("type of prices today: " + pricesToday[0]);
  }, [pricesToday]);

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Home</h2>
      <ul>{pricesToday && <PriceList pricesToday={pricesToday} />}</ul>
    </main>
  );
}
