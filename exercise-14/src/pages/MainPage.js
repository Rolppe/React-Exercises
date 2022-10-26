import React from "react";
import { useEffect, useState } from "react";

const MainPage = (props) => {
  const [dataUnits, setDataUnits] = useState([]);

  const fetchDataUnits = async () => {
    const response = await fetch(
      "https://twopagedatabase-default-rtdb.europe-west1.firebasedatabase.app/dataUnits.json"
    );

    const data = await response.json();

    const fetchedDataUnits = [];
    for (const key in data) {
      fetchedDataUnits.push({
        id: key,
        firstField: data[key].firstField,
        secondField: data[key].secondField,
        dateField: data[key].dateField,
      });
    }
    setDataUnits(fetchedDataUnits);
  };
  useEffect(() => {
    fetchDataUnits();
  }, []);

  let content = dataUnits.map((data) => (
    <div key={data.id}>
      <h2>{data.firstField}</h2>
      <h3>{data.secondField}</h3>
      <h3>{data.dateField}</h3>
    </div>
  ));

  return (
    <div>
      <p>main</p>
      <div>{content}</div>
    </div>
  );
};

export default MainPage;
