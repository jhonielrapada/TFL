// Set the countdown date (48 hours from now)
var target_date = new Date().getTime() + (1000 * 3600 * 48); 

// Variables for time units
var days, hours, minutes, seconds; 

// Get the countdown container element
var countdown = document.getElementById("tiles"); 

// Initial call to display countdown
getCountdown();

// Update countdown every second
setInterval(getCountdown, 1000);

function getCountdown() {
    // Find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    // Calculate days, hours, minutes, and seconds
    days = pad(parseInt(seconds_left / 86400));
    seconds_left %= 86400;
    
    hours = pad(parseInt(seconds_left / 3600));
    seconds_left %= 3600;
    
    minutes = pad(parseInt(seconds_left / 60));
    seconds = pad(parseInt(seconds_left % 60));

    // Format countdown string and set it to the countdown element
    countdown.innerHTML = 
        "<span>" + days + "</span>" +
        "<span>" + hours + "</span>" +
        "<span>" + minutes + "</span>" +
        "<span>" + seconds + "</span>"; 
}

function pad(n) {
    return (n < 10 ? '0' : '') + n;
}
