// first input field
// student num or cvsu email
const input = document.getElementById("studentLogin");
const submitBtn = document.querySelector(".submitBtn");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const value = input.value.trim();

  const isEmail =
    /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9.-]+\.)?(cvsu|school)\.edu\.ph$/.test(value);
  const isStudentNumber = /^\d{9}$/.test(value); // Adjust length to your school's format

  if (isEmail || isStudentNumber) {
    console.log("Logging in with:", value);
  } else {
    alert("Please enter a valid student email or ID number.");
  }
});

// password toggle
const passInput = document.getElementById("passInput");
const toggleIcon = document.querySelector(".passToggle");

toggleIcon.addEventListener("click", () => {
  const isPassword = passInput.type === "password";
  passInput.type = isPassword ? "text" : "password";
  toggleIcon.src = isPassword
    ? "images/icons/eye-icon-off.svg"
    : "images/icons/eye-icon-on.svg";
});

// help
document.getElementById("helpBtn").addEventListener("click", function () {
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSeT2VAvDneRt-nbq6bpSISHMq34nQCAgSV73i8qTXQ-A-yD7A/viewform",
    "_blank"
  );
});

// Reset Confirmation Page

const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", function () {
  document.getElementById("loginDiv").style.display = "none";
  document.getElementById("resetDiv").style.display = "block";
});
