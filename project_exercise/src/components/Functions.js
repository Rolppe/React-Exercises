import React from "react";

export function getDateTodayAndTomorrow() {
  var today = new Date();
  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var dayToday = today.getDate();
  var monthToday = today.getMonth() + 1;
  var yearToday = today.getFullYear();
  var dayTomorrow = tomorrow.getDate();
  var monthTomorrow = tomorrow.getMonth() + 1;
  var yearTomorrow = tomorrow.getFullYear();
  let dateToday =
    yearToday +
    "-" +
    ("0" + monthToday).slice(-2) +
    "-" +
    ("0" + dayToday).slice(-2);
  let dateTomorrow =
    yearTomorrow +
    "-" +
    ("0" + monthTomorrow).slice(-2) +
    "-" +
    ("0" + dayTomorrow).slice(-2);

  return [dateToday, dateTomorrow];
}

export function getCurrentPrices(currentDate, data) {
  for (let i = 0; i < data.Prices.length; i++) {
    if (data.Prices[i].Date === currentDate) {
      const currentPrices = [
        data.Prices[i].H00,
        data.Prices[i].H01,
        data.Prices[i].H02,
        data.Prices[i].H03,
        data.Prices[i].H04,
        data.Prices[i].H05,
        data.Prices[i].H06,
        data.Prices[i].H07,
        data.Prices[i].H08,
        data.Prices[i].H09,
        data.Prices[i].H10,
        data.Prices[i].H11,
        data.Prices[i].H12,
        data.Prices[i].H13,
        data.Prices[i].H14,
        data.Prices[i].H15,
        data.Prices[i].H16,
        data.Prices[i].H17,
        data.Prices[i].H18,
        data.Prices[i].H19,
        data.Prices[i].H20,
        data.Prices[i].H21,
        data.Prices[i].H22,
        data.Prices[i].H23,
      ];
      return currentPrices;
    }
  }
  return false;
}
export async function storeSettings(
  twoHoursProgram,
  threeHoursProgram,
  setSettingsArrived
) {
  const settings = {
    twoHours: twoHoursProgram,
    threeHours: threeHoursProgram,
  };

  await fetch(
    "https://price-settings-default-rtdb.europe-west1.firebasedatabase.app/settings.json",
    { method: "DELETE" }
  );

  const response = await fetch(
    "https://price-settings-default-rtdb.europe-west1.firebasedatabase.app/settings.json",
    {
      method: "POST",
      body: JSON.stringify(settings),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log("storeSettings: " + data);
}

export async function getSettings(
  setTwoHoursProgram,
  setThreeHoursProgram,
  setSettingsArrived
) {
  const response = await fetch(
    "https://price-settings-default-rtdb.europe-west1.firebasedatabase.app/settings.json"
  );
  const data = await response.json();
  //console.log(data.twoHours);
  const fetchedPrices = [];

  for (const key in data) {
    fetchedPrices.push({
      id: key,
      twoHours: data[key].twoHours,
      threeHours: data[key].threeHours,
    });
  }
  // console.log("Two hours: " + fetchedTodos[fetchedTodos.length - 1].twoHours);
  // console.log("Two three: " + fetchedTodos[fetchedTodos.length - 1].threeHours);
  if (fetchedPrices.length > 0) {
    setTwoHoursProgram(fetchedPrices[fetchedPrices.length - 1].twoHours);
    setThreeHoursProgram(fetchedPrices[fetchedPrices.length - 1].threeHours);
  }

  setSettingsArrived(true);
}
export function Program(props) {
  let amountOfHours = props.hours;
  let minprice = 1000;
  let outputIndex = 0;
  let priceSample = 0;
  for (let i = 0; i + amountOfHours <= props.prices.length; i++) {
    for (let j = 0; j < amountOfHours; j++) {
      priceSample += props.prices[i + j];
    }

    if (priceSample < minprice) {
      minprice = priceSample;
      outputIndex = i;
    }
    priceSample = 0;
  }
  minprice = Math.round((minprice / amountOfHours) * 100) / 100;
  return (
    <div>
      Cheapest hours {props.day} from: {outputIndex}:00 to{" "}
      {outputIndex + amountOfHours}:00. Median price {minprice} c/kWh
    </div>
  );
}
