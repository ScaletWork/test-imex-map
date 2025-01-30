const displayTime = document.querySelector('.display-time');

// Time
function showTime() {
  let time = new Date();
  displayTime.innerText = time.toLocaleTimeString('uk-UA', {
    hour: '2-digit',
    minute: '2-digit',
  });

  // Calculate the remaining time until the next minute
  const millisecondsUntilNextMinute = (60 - time.getSeconds()) * 1000;
  setTimeout(showTime, millisecondsUntilNextMinute);
}

showTime();

// Date
function updateDate() {
  let today = new Date();

  // Extract the day, month, and year
  let dayNum = String(today.getDate()).padStart(2, '0');
  let month = String(today.getMonth() + 1).padStart(2, '0');
  let year = today.getFullYear();

  // Update the date in the format DD.MM.YYYY
  document.getElementById('daynum').textContent = dayNum;
  document.getElementById('month').textContent = month;
  document.getElementById('year').textContent = year;
}

updateDate();
