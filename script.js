function Calculate() {
  let today = new Date();
  let inputDate = new Date(document.getElementById("date-input").value);

  let birthDetails = {
    date: inputDate.getDate(),
    month: inputDate.getMonth(),
    year: inputDate.getFullYear()
  };

  let date1 = today.getDate();
  let month1 = today.getMonth();
  let year1 = today.getFullYear();
  let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (inputDate > today) {
    document.getElementById("years").textContent = "0";
    document.getElementById("months").textContent = "0";
    document.getElementById("days").textContent = "0";
    return;
  }

  if (birthDetails.date > date1) {
    month1 = month1 - 1;
    date1 = date1 + month[birthDetails.month - 1];
  }

  if (birthDetails.month > month1) {
    year1 = year1 - 1;
    month1 = month1 + 12;
  }

  let y = year1 - birthDetails.year;
  let m = month1 - birthDetails.month;
  let d = date1 - birthDetails.date;

  if (m < 0) {
    y = y - 1;
    m = m + 12;
  }

  if (d < 0) {
    m = m - 1;
    let prevMonth = month[month1 - 1];
    d = d + prevMonth;
  }

  document.getElementById("years").textContent = y;
  document.getElementById("months").textContent = m;
  document.getElementById("days").textContent = d;
}