document.addEventListener("DOMContentLoaded", function () {
  const monthYear = document.getElementById("main-month-year");
  const daysContainer = document.getElementById("main-days");

  const prevButton = document.getElementById("main-prev");
  const nextButton = document.getElementById("main-next");

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

  let currentDate = new Date(); // used for rendering current view
  const today = new Date(); // fixed today reference

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

      const dayDiv = document.createElement("div");
      dayDiv.classList.add("main-day");

      // Mark today
      if (
        current.getDate() === today.getDate() &&
        current.getMonth() === today.getMonth() &&
        current.getFullYear() === today.getFullYear()
      ) {
        dayDiv.classList.add("main-body-today");
      }

      // Set the day number
      dayDiv.textContent = current.getDate();
      daysContainer.appendChild(dayDiv);
    }
  }

  // Button event listeners
  prevButton.addEventListener("click", function () {
    currentDate.setDate(currentDate.getDate() - 7); // go back 1 week
    renderWeek(currentDate);
  });

  nextButton.addEventListener("click", function () {
    currentDate.setDate(currentDate.getDate() + 7); // go forward 1 week
    renderWeek(currentDate);
  });

  // Initial render
  renderWeek(currentDate);
});

// main cal grid
document.addEventListener("DOMContentLoaded", function () {
  const calendarGrid = document.getElementById("main-cal-grid");

  const timeSlots = 23.8; // 7AM to 7PM
  const days = 7; // Sunday to Saturday

  for (let i = 0; i < timeSlots * days; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");
    calendarGrid.appendChild(cell);
  }
});
