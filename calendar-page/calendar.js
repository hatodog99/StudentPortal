document.addEventListener("DOMContentLoaded", function () {
  const monthYear = document.getElementById("month-year");
  const daysContainer = document.getElementById("days");

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
    "December",
  ];

  let currentDate = new Date();
  let today = new Date();

  function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDay = new Date(year, month + 1, 0).getDate();

    monthYear.textContent = `${months[month]} ${year}`;

    daysContainer.innerHTML = "";

    // Current month's dates
    for (let i = 1; i <= lastDay; i++) {
      const dayDiv = document.createElement("div");
      dayDiv.textContent = i;

      if (
        i === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear()
      ) {
        dayDiv.classList.add("today");
      }
      daysContainer.appendChild(dayDiv);
    }
  }

  renderCalendar(currentDate);
});
