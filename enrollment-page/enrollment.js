
document.getElementById("view-semester").addEventListener('click', function(){
    document.getElementById("header-title").innerText = "Enrolled Courses - Second Semester 2024-2025";
    document.getElementById("enrollment-div").style.display = "none";
    document.getElementById("semester-div").style.display = "block";
});


document.getElementById("direct-enroll").addEventListener('click', function(){
    document.getElementById("header-title").innerText = "Direct Enroll";
    document.getElementById("enrollment-div").style.display = "none";
    document.getElementById("directEnroll-div").style.display = "block";
});

document.getElementById("enroll-course").addEventListener('click', function(){
    document.getElementById("header-title").innerText = "Enroll Courses";
    document.getElementById("enrollment-div").style.display = "none";
    document.getElementById("enroll-course-div").style.display = "block";
});

document.getElementById("shift-program").addEventListener('click', function(){
  document.getElementById("header-title").innerText = "Shift Program";
    document.getElementById("enrollment-div").style.display = "none";
    document.getElementById("program-shift-div").style.display = "block";
});


const input = document.getElementById("search");
const subjects = document.querySelectorAll('.semester-subject');

  input.addEventListener('input', function () {
    const query = input.value.toLowerCase();

    subjects.forEach(subject => {
      const title = subject.querySelector('.subject-title').textContent.toLowerCase();
      subject.style.display = title.includes(query) ? "" : "none";
    });
  });