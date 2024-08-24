function updateCountdown() {
    const eventDate = new Date('August 31, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = `${days}<span>Days</span>`;
    document.getElementById('hours').innerHTML = `${hours}<span>Hours</span>`;
    document.getElementById('minutes').innerHTML = `${minutes}<span>Minutes</span>`;
    document.getElementById('seconds').innerHTML = `${seconds}<span>Seconds</span>`;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = 'Event Started!';
    }
}

// Update the countdown every 1

// Update the countdown every 1 second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to display countdown immediately
updateCountdown();
