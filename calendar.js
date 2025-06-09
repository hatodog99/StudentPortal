document.addEventListener("DOMContentLoaded", function () {
  const extendBtn = document.getElementById("extend-btn");
  const extendIcon1 = document.getElementById("extend-icon-1");
  const extendIcon2 = document.getElementById("extend-icon-2");

  const mainCalContainer = document.getElementById("main-cal-container");
  const extendedContainer = document.getElementById("extended-container");

  extendBtn.addEventListener("click", function () {
    extendedContainer.classList.toggle("hidden");
  });
});
