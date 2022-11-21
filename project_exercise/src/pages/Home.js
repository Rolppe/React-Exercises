import React from "react";
import { useEffect, useState } from "react";

export default function Home() {
  const [dataUnits, setDataUnits] = useState([]);

  const fetchDataUnits = async () => {
    const response = await fetch(
      "https://ohjelmistoprojekti-production.up.railway.app/pricejson/"
    );

    const data = await response.json();
    console.log(data);
    // const fetchedDataUnits = [];
    // for (const key in data) {
    //   fetchedDataUnits.push({
    //     id: key,
    //     firstField: data[key].firstField,
    //     secondField: data[key].secondField,
    //     dateField: data[key].dateField,
    //   });
    // }
    // setDataUnits(fetchedDataUnits);
  };
  useEffect(() => {
    fetchDataUnits();
  }, []);
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Home</h2>
    </main>
  );
}
