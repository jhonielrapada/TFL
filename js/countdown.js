// Set the countdown date for Christmas 2024 at midnight GMT+8
var target_date = new Date('2024-12-25T00:00:00+08:00').getTime(); 

// Get the countdown container elements
var daysElem = document.getElementById("days");
var hoursElem = document.getElementById("hours");
var minutesElem = document.getElementById("minutes");
var secondsElem = document.getElementById("seconds");

// Initial call to display countdown
getCountdown();

// Update countdown every second
setInterval(getCountdown, 1000);

function getCountdown() {
    // Find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    // Calculate days, hours, minutes, and seconds
    var days = pad(parseInt(seconds_left / 86400));
    seconds_left %= 86400;
    
    var hours = pad(parseInt(seconds_left / 3600));
    seconds_left %= 3600;
    
    var minutes = pad(parseInt(seconds_left / 60));
    var seconds = pad(parseInt(seconds_left % 60));

    // Set the countdown values to the elements
    daysElem.textContent = days;
    hoursElem.textContent = hours;
    minutesElem.textContent = minutes;
    secondsElem.textContent = seconds;
}

function pad(n) {
    return (n < 10 ? '0' : '') + n;
}
