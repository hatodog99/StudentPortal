const darkmodeBtn = document.getElementById("darkmode");
const lightmodeBtn = document.getElementById("lightmode");

const input = document.querySelector(".loginContainer input");
const passInput = document.querySelector("#passInput");

// aw hell nahhhhhh
darkmodeBtn.addEventListener("click", function () {
  input.classList.toggle("dark-placeholder");
  input.style.color = "white";
  passInput.classList.toggle("dark-placeholder");
  passInput.style.color = "white";

  document.getElementById("resetDiv").style.background =
    "rgba(73, 73, 73, 0.45)";
  document.getElementById("resetTitle").style.color = "white";
  document.getElementById("resetText").style.color = "white";

  document.body.style.backgroundImage = "url('loginDocs/image 11.png')";
  darkmodeBtn.style.display = "none";
  lightmodeBtn.style.display = "block";
  document.getElementById("title").style.color = "gold";
  document.getElementById("subTitle").style.color = "white";
  document.getElementById("tennets").style.color = "gold";
  document.getElementById("copyright").style.color = "white";
  document.getElementById("loginTitle").style.color = "white";
  document.getElementById("loginDiv").style.background =
    "rgba(73, 73, 73, 0.45)";
  document.getElementById("loginBtn").style.backgroundColor = "black";
  document.getElementById("loginBtn").style.color = "white";
  document.getElementById("resetBtn").style.color = "white";
  document.getElementById("loginBtn").style.border = "1px solid white";
  document.getElementsByClassName("inputDetail").style.background =
    "rgba(184, 184, 184, 0.3)";
});

lightmodeBtn.addEventListener("click", function () {
  location.reload();
});

const resetPassBtn = document.getElementById("resetBtn");

resetPassBtn.addEventListener("click", function () {
  document.getElementById("resetDiv").style.display = "block";
  document.getElementById("loginDiv").style.display = "none";
});
