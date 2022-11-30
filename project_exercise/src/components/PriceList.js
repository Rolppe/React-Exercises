import React from "react";
import PriceItem from "./PriceItem";

export default function PriceList(props) {
  //console.log("PriceList" + props.pricesToday);
  //console.log("PriceList: " + value[0]);

  return props.pricesToday.map((item, index) => (
    <PriceItem item={item} index={index} />
  )); //priceItem(item));
}
