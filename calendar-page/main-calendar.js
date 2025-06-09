// MAIN CALENDAR CONTENTS
document.addEventListener("DOMContentLoaded", function () {
  const monthYear = document.getElementById("main-month-year");
  const daysContainer = document.getElementById("main-days");

  const todayButton = document.getElementById("main-today");
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

  let currentDate = new Date();
  const today = new Date();

  function renderWeek(date) {
    const year = date.getFullYear();
    const month = date.getMonth();

    monthYear.textContent = `${months[month]} ${year}`;
    todayButton.textContent = today.getDate();

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
    currentDate.setDate(currentDate.getDate() - 7);
    renderWeek(currentDate);
  });

  nextButton.addEventListener("click", function () {
    currentDate.setDate(currentDate.getDate() + 7);
    renderWeek(currentDate);
  });

  todayButton.addEventListener("click", function () {
    currentDate = new Date();
    renderWeek(currentDate);
  });

  // Initial render
  renderWeek(currentDate);
});

// MAIN CALENDAR GRID BACKGROUND
document.addEventListener("DOMContentLoaded", function () {
  const calendarGrid = document.getElementById("main-cal-grid-container");

  const timeSlots = 13.8; // 7AM to 7PM
  const days = 7; // Sunday to Saturday

  for (let i = 0; i < timeSlots * days; i++) {
    const cell = document.createElement("div");
    cell.classList.add("bg-grid-cell");
    calendarGrid.appendChild(cell);
  }
});

// MAIN CAL OVERLAYS
document.addEventListener("DOMContentLoaded", function () {
  const eventOverlayMap = new Map([
    ["event-1", "event-1-overlay"],
    ["event-2", "event-2-overlay"],
    ["event-3", "event-3-overlay"],
    ["event-4", "event-4-overlay"],
    ["event-5", "event-5-overlay"],
    ["event-6", "event-6-overlay"],
    ["event-7", "event-7-overlay"],
    ["event-8", "event-8-overlay"],
    ["event-9", "event-9-overlay"],
    ["event-10", "event-10-overlay"],
    ["event-11", "event-11-overlay"],
    ["event-12", "event-12-overlay"],
    ["event-13", "event-13-overlay"],
    ["event-14", "event-14-overlay"],
    ["event-15", "event-15-overlay"],
    ["event-16", "event-16-overlay"],
  ]);

  const allOverlayElements = [];

  eventOverlayMap.forEach((overlayClassName, eventClassName) => {
    const eventElements = document.getElementsByClassName(eventClassName);
    const overlayElements = document.getElementsByClassName(overlayClassName);

    Array.from(eventElements).forEach((eventElement, index) => {
      const overlayElement = overlayElements[index];
      if (eventElement && overlayElement) {
        allOverlayElements.push(overlayElement); // Keep for outside click detection

        eventElement.addEventListener("click", (e) => {
          e.stopPropagation(); // Prevent this click from bubbling to document

          // Toggle visibility
          const isVisible = overlayElement.style.display === "flex";
          allOverlayElements.forEach((el) => (el.style.display = "none")); // Close all
          overlayElement.style.display = isVisible ? "none" : "flex";
        });
      }
    });
  });

  // Hide all overlays when clicking outside
  document.addEventListener("click", function () {
    allOverlayElements.forEach((el) => (el.style.display = "none"));
  });
});
