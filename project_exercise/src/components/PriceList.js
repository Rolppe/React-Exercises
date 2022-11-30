import React from "react";
import PriceItem from "./PriceItem";

export default function PriceList(props) {
  return props.pricesToday.map((item, index) => (
    <PriceItem item={item} index={index} />
  ));
}
