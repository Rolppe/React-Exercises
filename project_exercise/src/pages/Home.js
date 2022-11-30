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
        //console.log(data.Prices[0].H00);
        setPricesToday(getCurrentPrices(dateToday, data));
        //console.log(pricesToday);
        //setpriceData(data);
        //console.log(pricesToday);
      })
      .then(() => {});
  }, []);

  useEffect(() => {
    console.log("type of prices today: " + pricesToday[0]);
  }, [pricesToday]);

  // function extractPricesArray(props) {
  //   const pricesArray = [];
  //   //const dummy = props.map((price) => console.log(price));
  //   return props.map((price) => <div>{price}</div>);
  // }

  //<div>{prices.Klo_00}</div>
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Home</h2>
      <ul>{pricesToday && <PriceList pricesToday={pricesToday} />}</ul>
    </main>
  );
}

//klo: {time}.00 price: {todayPrices[time]}
//<div>{pricesToday && extractPricesArray(pricesToday)}</div>
