document.addEventListener("DOMContentLoaded", function () {
  const monthYear = document.getElementById("main-month-year");
  const daysContainer = document.getElementById("main-days");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  let currentDate = new Date();
  let today = new Date();

  function renderWeek(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    monthYear.textContent = `${months[month]} ${year}`;
    daysContainer.innerHTML = "";

    // Get the Sunday of the current week
    const dayOfWeek = date.getDay(); // 0 (Sun) - 6 (Sat)
    const weekStart = new Date(date);
    weekStart.setDate(date.getDate() - dayOfWeek);

    // Loop through 7 days
    for (let i = 0; i < 7; i++) {
      const current = new Date(weekStart);
      current.setDate(weekStart.getDate() + i);

      const dayElement = document.createElement("div");
      dayElement.classList.add("main-day");

      // Mark today
      if (
        current.getDate() === today.getDate() &&
        current.getMonth() === today.getMonth() &&
        current.getFullYear() === today.getFullYear()
      ) {
        dayElement.classList.add("main-body-today");
      }

      // Only the date number
      dayElement.textContent = current.getDate();

      daysContainer.appendChild(dayElement);
    }
  }

  renderWeek(currentDate);
});
