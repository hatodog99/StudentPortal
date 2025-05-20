
// for darkmode/lightmode
let darkmode = localStorage.getItem('darkmode');

const themeSwitch = document.getElementById("theme-switch");

const enableDarkmode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'active');
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkmode', 'inactive');
}

if(darkmode === "active") enableDarkmode();

themeSwitch.addEventListener('click', function(){
  darkmode = localStorage.getItem('darkmode');

  if(darkmode !== "active"){
    enableDarkmode();
  }
  else{
    disableDarkmode();
  }  
});


// Reset Confirmation Page

const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener('click', function(){
  document.getElementById("loginDiv").style.display = "none";
  document.getElementById("resetDiv").style.display = "block";
});
