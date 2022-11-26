export async function fetchPrices() {
  let priceArray = [];
  const response = await fetch(
    "https://ohjelmistoprojekti-production.up.railway.app/pricejson/"
  );
  const data = await response.json();
  let [dateToday, dateTomorrow] = getDateTodayAndTomorrow();
  let pricesToday = getCurrentPrices(dateToday, data);
  let pricesTomorrow = getCurrentPrices(dateTomorrow, data);
  return [pricesToday, pricesTomorrow];
  // for (let unit in data.Prices[3]) {
  //   console.log(unit);
  //   //priceArray.push()
  // }
}
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
  let dateToday = yearToday + "-" + monthToday + "-" + dayToday;
  let dateTomorrow = yearTomorrow + "-" + monthTomorrow + "-" + dayTomorrow;

  return [dateToday, dateTomorrow];
}

export function getCurrentPrices(currentDate, data) {
  for (let i = 0; i < data.Prices.length; i++) {
    if (data.Prices[i].Date === currentDate) {
      //console.log("getCurrentPrices date: " + currentDate);
      //console.log(data.Prices[i].Date);

      const currentPrices = {
        Klo_00: data.Prices[i].H00,
        Klo_01: data.Prices[i].H01,
        Klo_02: data.Prices[i].H02,
        Klo_03: data.Prices[i].H03,
        Klo_04: data.Prices[i].H04,
        Klo_05: data.Prices[i].H05,
        Klo_06: data.Prices[i].H06,
        Klo_07: data.Prices[i].H07,
        Klo_08: data.Prices[i].H08,
        Klo_09: data.Prices[i].H09,
        Klo_10: data.Prices[i].H10,
        Klo_11: data.Prices[i].H11,
        Klo_12: data.Prices[i].H12,
        Klo_13: data.Prices[i].H13,
        Klo_14: data.Prices[i].H14,
        Klo_15: data.Prices[i].H15,
        Klo_16: data.Prices[i].H16,
        Klo_17: data.Prices[i].H17,
        Klo_18: data.Prices[i].H18,
        Klo_19: data.Prices[i].H19,
        Klo_20: data.Prices[i].H20,
        Klo_21: data.Prices[i].H21,
        Klo_22: data.Prices[i].H22,
        Klo_23: data.Prices[i].H23,
      };
      return currentPrices;
    }
  }
  return false;
}
