import React from "react";
import { useEffect, useState } from "react";
import {
  getDateTodayAndTomorrow,
  getCurrentPrices,
  fetchData,
} from "../components/Functions";

export default function Home(props) {
  const [todayPrices, setTodayPrices] = useState([]);

  useEffect(() => {
    console.log("useEffect before");
    let [pricesTodat, pricesTomorrow] = fetc;
    setTodayPrices(fetchData());
    console.log("useEffect after");
  }, []);

  useEffect(() => {
    console.log("useEffect updated before");
    console.log("Home useEffect: " + todayPrices);
    //console.log("Home useEffect: " + todayPrices.Klo_00);
  }, [todayPrices]);

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Home</h2>
      <ul>
        <h3>Prices today</h3>
        <div>klo 00:00 price = </div>
      </ul>
    </main>
  );
}

//klo: {time}.00 price: {todayPrices[time]}/kWh
