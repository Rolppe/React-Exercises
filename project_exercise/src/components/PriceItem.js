import React from "react";

export default function PriceItem(props) {
  let times = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
  ];
  //console.log(props.index);
  return (
    <div>
      Klo: {times[props.index]} Price: {props.item} c/KWh
    </div>
  );
}
