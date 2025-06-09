const editProfileBtn = document.getElementById("edit-profile");

editProfileBtn.addEventListener('click', function(){
    document.getElementById("main-profile-container").style.display = "none";
    document.getElementById("edit-profile-page").style.display = "block";
});