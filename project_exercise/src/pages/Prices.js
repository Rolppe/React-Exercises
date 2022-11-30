import React from "react";
import { useEffect, useState } from "react";

import PriceList from "../components/PriceList";
import "./Prices.css";

export default function Prices(props) {
  // useEffect(() => {
  //   console.log("type of prices today: " + pricesTomorrow[0]);
  // }, [pricesToday]);

  return (
    <main className="Main">
      <div className="float-container">
        <div className="float-child">
          <h5>Prices Today</h5>
          {props.pricesToday && (
            <PriceList pricesTime={props.pricesToday} preKey="today" />
          )}
        </div>
        <div className="float-child">
          <h5>Prices Tomorrow</h5>

          {props.pricesTomorrow ? (
            <PriceList pricesTime={props.pricesTomorrow} preKey="tomorrow" />
          ) : (
            "Prices will arrive 14:30"
          )}
        </div>
      </div>
    </main>
  );
}
