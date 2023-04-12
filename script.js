const birthDay = document.getElementById("day-input"),
  birthMonth = document.getElementById("month-input"),
  birtyYear = document.getElementById("year-input");

const today = new Date();
const dayFromToday = today.getDate();
const monthFromToday = today.getMonth();
const yearFromToday = today.getFullYear();

const CURRENT_YEAR = yearFromToday;
const MAX_MONTH = 12;
const MAX_ODD_DAY = 31;
const MAX_EVEN_DAY = 30;
const FEBRUARY = 28;
const ODD_FEBRUARY = 29;

const yearLabel = document.getElementById("year-label");
birtyYear.addEventListener("input", validateYear);
function validateYear() {
  const birtyYearValue = birtyYear.value;
  if (birtyYearValue > CURRENT_YEAR) {
    yearLabel.style.color = "red";
    birtyYear.style.border = "1.5px solid red";
    const newInputYear = document.querySelector(".years-counter");
    newInputYear.innerHTML = '--';
    const newInputMonth = document.querySelector(".months-counter");
    newInputMonth.innerHTML = '--';
    const newInputDay = document.querySelector(".days-counter");
    newInputDay.innerHTML = '--';
  } else {
    yearLabel.style.color = "";
    birtyYear.style.border = "";
  }
}

birthMonth.addEventListener("input", validateMonth);
function validateMonth() {
  const monthLabel = document.getElementById("month-label");
  const birthMonthValue = birthMonth.value;
  if (birthMonthValue > MAX_MONTH || birthMonthValue <= 0) {
    monthLabel.style.color = "red";
    birthMonth.style.border = "1.5px solid red";
    const newInputYear = document.querySelector(".years-counter");
    newInputYear.innerHTML = '--';
    const newInputMonth = document.querySelector(".months-counter");
    newInputMonth.innerHTML = '--';
    const newInputDay = document.querySelector(".days-counter");
    newInputDay.innerHTML = '--';
  } else {
    monthLabel.style.color = "";
    birthMonth.style.border = "";
  }
}

birthDay.addEventListener("input", validateDay);
function validateDay() {
  const dayLabel = document.getElementById("day-label");
  const birthDayValue = birthDay.value;
  if (birthDayValue > MAX_ODD_DAY || birthDayValue <= 0) {
    dayLabel.style.color = "red";
    birthDay.style.border = "1.5px solid red";
    const newInputYear = document.querySelector(".years-counter");
    newInputYear.innerHTML = '--';
    const newInputMonth = document.querySelector(".months-counter");
    newInputMonth.innerHTML = '--';
    const newInputDay = document.querySelector(".days-counter");
    newInputDay.innerHTML = '--';
  } else {
    dayLabel.style.color = "";
    birthDay.style.border = "";
  }
}

const button = document.getElementById("button");
button.addEventListener("click", telewizor);

function telewizor() {
  const birtyYearValue = parseInt(birtyYear.value);
  const birthMonthValue = parseInt(birthMonth.value);
  const birthDayValue = parseInt(birthDay.value);
  const fullDate = new Date(
    Date.UTC(birtyYearValue, birthMonthValue, birthDayValue)
  );

  let ageYears = today.getUTCFullYear() - fullDate.getUTCFullYear();
  let ageMonths = today.getMonth() - fullDate.getMonth();
  let ageDays = today.getDate() - fullDate.getDate();

  if (ageMonths < 0 || (ageMonths < 0 && ageDays < 0)) {
    ageYears--;
  }
  let correctedMonth = ageMonths < 0 ? ageMonths + 12 : ageMonths;
  let correctedDay =
    ageDays < 0
      ? ageDays + daysInMonth(today.getMonth(), today.getFullYear())
      : ageDays;

  const newInputYear = document.querySelector(".years-counter");
  newInputYear.innerHTML = ageYears;
  const newInputMonth = document.querySelector(".months-counter");
  newInputMonth.innerHTML = correctedMonth;
  const newInputDay = document.querySelector(".days-counter");
  newInputDay.innerHTML = correctedDay;
}

// funkcja pomocnicza do określenia liczby dni w danym miesiącu
function daysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}
