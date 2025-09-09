// --- JAVASCRIPT LOGIC ---

// Set the date we're counting down to.
// NOTE: Months are 0-indexed, so 0 is January, 11 is December.
const countdownDate = new Date("Sep 18, 2025 00:00:00").getTime();

// Get the elements from the HTML that we need to update.
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const timerEl = document.getElementById('timer');
const expiredMessageEl = document.getElementById('expired-message');
const titleEl = document.getElementById('countdown-title');

// Update the countdown every 1 second.
const countdownInterval = setInterval(function() {

    // Get today's date and time (in milliseconds).
    const now = new Date().getTime();

    // Find the distance between now and the countdown date.
    const distance = countdownDate - now;

    // Time calculations for days, hours, minutes, and seconds.
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the elements.
    // We use a function to add a leading zero if the number is less than 10.
    daysEl.innerText = days;
    hoursEl.innerText = formatTime(hours);
    minutesEl.innerText = formatTime(minutes);
    secondsEl.innerText = formatTime(seconds);

    // If the countdown is finished, write some text.
    if (distance < 0) {
        clearInterval(countdownInterval); // Stop the timer
        timerEl.style.display = 'none'; // Hide the timer boxes
        titleEl.style.display = 'none'; // Hide the original title
        expiredMessageEl.style.display = 'block'; // Show the expired message
    }
}, 1000); // 1000 milliseconds = 1 second

// Helper function to add a leading zero to numbers less than 10
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}