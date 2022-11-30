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
