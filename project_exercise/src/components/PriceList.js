import React from "react";
import PriceItem from "./PriceItem";

export default function PriceList(props) {
  return props.pricesToday.map((item, index) => (
    <PriceItem key={props.preKey + index} item={item} index={index} />
  ));
}
