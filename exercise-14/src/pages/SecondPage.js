import React from "react";
import { useNavigate } from "react-router-dom";
import AddData from "../components/AddData";

const SecondPage = (props) => {
  let navigate = useNavigate();

  const addDataUnitHandeler = async (dataUnit) => {
    const response = await fetch(
      "https://twopagedatabase-default-rtdb.europe-west1.firebasedatabase.app/dataUnits.json",
      {
        method: "POST",
        body: JSON.stringify(dataUnit),
        headers: { ContentType: "application/json" },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  const navigateHomeHandler = () => {
    navigate("/");
  };

  return (
    <div>
      <p>Second Page</p>
      <button onClick={navigateHomeHandler}>takaisin</button>
      <AddData
        addDataUnitHandeler={addDataUnitHandeler}
        navigateHomeHandler={navigateHomeHandler}
      />
    </div>
  );
};

export default SecondPage;
