document.addEventListener("DOMContentLoaded", function () {
  const notifBtn = document.getElementById("notif-btn");
  const notifDropdown = document.getElementById("notif-dropdown");

  // Initialize the dropdown to be hidden
  notifBtn.addEventListener("click", function () {
    const isOpen = notifDropdown.style.display === "block";

    if (notifDropdown.style.display === "block") {
      notifDropdown.style.display = "none";
    } else {
      notifDropdown.style.display = "block";
    }

    notifDropdown.style.display = isOpen ? "none" : "block";
    notifBtn.classList.toggle("active", !isOpen);
  });

  // Close the dropdown if clicked outside
  document.addEventListener("click", function (event) {
    const isClickInside =
      notifBtn.contains(event.target) || notifDropdown.contains(event.target);

    if (!isClickInside) {
      notifDropdown.style.display = "none";
      notifBtn.classList.remove("active");
    }
  });
});
