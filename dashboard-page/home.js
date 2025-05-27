

// CALENDAR
const daysContainer = document.getElementById('days');
const monthYear = document.getElementById('month-year');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentDate = new Date();

function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const today = new Date();

  monthYear.textContent = date.toLocaleString('default', { month: 'long', year: 'numeric' });

  daysContainer.innerHTML = '';

  const firstDayIndex = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  const prevLastDate = new Date(year, month, 0).getDate();

  for (let i = firstDayIndex; i > 0; i--) {
    const div = document.createElement('div');
    div.textContent = prevLastDate - i + 1;
    div.style.opacity = '0.3';
    daysContainer.appendChild(div);
  }

  for (let day = 1; day <= lastDate; day++) {
    const div = document.createElement('div');
    div.textContent = day;

    if (day === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
      div.classList.add('today');
    }

    daysContainer.appendChild(div);
  }

  const totalBoxes = firstDayIndex + lastDate;
  const nextDays = totalBoxes % 7 === 0 ? 0 : 7 - (totalBoxes % 7);
  for (let i = 1; i <= nextDays; i++) {
    const div = document.createElement('div');
    div.textContent = i;
    div.style.opacity = '0.3';
    daysContainer.appendChild(div);
  }
}


prevBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});
nextBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

renderCalendar(currentDate);


// REMINDERS
const today = new Date();

const weekday = today.toLocaleDateString('en-US', { weekday: 'long' });
const month = today.toLocaleDateString('en-US', { month: 'long' });
const day = today.getDate();

const formattedDate = `<strong>${weekday}</strong>, ${month} ${day}`;

document.getElementById('today-date').innerHTML = formattedDate;



// REGISTRATION FORM PREVIEW
const regPreview = document.getElementById("reg-preview");
const overlay = document.getElementById("regform-preview-overlay");

regPreview.addEventListener('click', function(){
  document.getElementById("regform-popup-container").style.display = "block";
});

overlay.addEventListener('click', function(){
  document.getElementById("regform-popup-container").style.display = "none";
});

document.getElementById("popup").addEventListener('click', (e) => {
  e.stopPropagation();
});