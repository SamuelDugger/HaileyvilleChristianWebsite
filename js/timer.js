var x = setInterval(function () {
  var now = new Date();
  var targetDate = getNextSunday();

  // Check if it is Sunday and the current time is past 10 AM
  if (now.getDay() === 0 && now.getHours() >= 10) {
    // Calculate the date of the next Sunday (next week) and set it as the target date
    targetDate.setDate(targetDate.getDate() + 7);
  }

  var distance = targetDate.getTime() - now.getTime();

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("nextLive").innerHTML =
      "Live on " + formatDate(targetDate) + " at 10AM";
  } else {
    document.getElementById("nextLive").innerHTML =
      "Live next " + formatDate(targetDate) + " at 10AM";
  }
}, 1000);

function formatDate(date) {
  var options = { weekday: "short", month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options).replace(", Sun,", ",");
}

function getNextSunday() {
  var now = new Date();
  var targetDate = new Date(now);

  // Calculate the date of the next Sunday (this week) and set it as the target date
  targetDate.setDate(now.getDate() + ((7 - now.getDay()) % 7));
  targetDate.setHours(10, 0, 0, 0); // Set the time to 10 AM

  return targetDate;
}
