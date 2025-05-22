// Reset Confirmation Page

const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", function () {
  document.getElementById("loginDiv").style.display = "none";
  document.getElementById("resetDiv").style.display = "block";
});
