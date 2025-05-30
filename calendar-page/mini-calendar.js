document.addEventListener("DOMContentLoaded", function () {
  const monthYear = document.getElementById("mini-month-year");
  const daysContainer = document.getElementById("mini-days");

  const prevButton = document.getElementById("mini-prev");
  const nextButton = document.getElementById("mini-next");

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
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

    // Previous month's dates
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = firstDay - 1; i >= 0; i--) {
      const dayDiv = document.createElement("div");
      dayDiv.textContent = prevMonthLastDay - i;
      dayDiv.classList.add("mini-prev-month");
      daysContainer.appendChild(dayDiv);
    }

    // Current month's dates
    for (let i = 1; i <= lastDay; i++) {
      const dayDiv = document.createElement("div");
      dayDiv.textContent = i;

      if (
        i === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear()
      ) {
        dayDiv.classList.add("mini-today");
      }
      daysContainer.appendChild(dayDiv);
    }

    // Next month's dates
    const nextMonthStartDay = 7 - new Date(year, month + 1, 0).getDay() - 1;
    for (let i = 1; i <= nextMonthStartDay; i++) {
      const dayDiv = document.createElement("div");
      dayDiv.textContent = i;
      dayDiv.classList.add("mini-next-month");
      daysContainer.appendChild(dayDiv);
    }
  }

  prevButton.addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
  });

  nextButton.addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
  });

  renderCalendar(currentDate);
});
