document.addEventListener("DOMContentLoaded", function () {
  const extendBtn = document.getElementById("extend-btn");
  const extendIcon1 = document.getElementById("extend-icon-1");
  const extendIcon2 = document.getElementById("extend-icon-2");

  const extendedContainer = document.getElementById("extended-container");

  extendBtn.addEventListener("click", function () {
    if (extendedContainer.style.display === "none") {
      extendedContainer.style.display = "flex";

      extendIcon1.style.display = "block";
      extendIcon2.style.display = "none";
    } else {
      extendedContainer.style.display = "none";

      extendIcon1.style.display = "none";
      extendIcon2.style.display = "block";
    }
  });
});
