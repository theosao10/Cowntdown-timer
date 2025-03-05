let interval;
let isDarkTheme = false;

document.getElementById('eventForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const eventName = document.getElementById('eventName').value.trim();
    const eventDate = document.getElementById('eventDate').value;
    const eventTime = document.getElementById('eventTime').value;

    if (!eventName) {
        alert('Please enter an event name.');
        return;
    }

    if (!eventDate) {
        alert('Please enter a valid date.');
        return;
    }

    const eventDateTime = new Date(eventDate + 'T' + (eventTime || '00:00:00'));
    if (isNaN(eventDateTime.getTime())) {
        alert('Please enter a valid date and time.');
        return;
    }

    startCountdown(eventName, eventDateTime);
    document.getElementById('stopButton').style.display = 'block';
});

document.getElementById('holidayForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const holidaySelect = document.getElementById('holidaySelect');
    const selectedHoliday = holidaySelect.options[holidaySelect.selectedIndex];
    const holidayName = selectedHoliday.text;
    const holidayDate = selectedHoliday.value;

    if (!holidayDate) {
        alert('Please select a holiday.');
        return;
    }

    const holidayDateTime = new Date(holidayDate);
    startCountdown(holidayName, holidayDateTime);
    document.getElementById('stopButton').style.display = 'block';
});

document.getElementById('stopButton').addEventListener('click', function() {
    clearInterval(interval);
    document.getElementById('countdownContainer').innerHTML = '';
    document.getElementById('stopButton').style.display = 'none';
});

document.getElementById('themeToggle').addEventListener('click', function() {
    isDarkTheme = !isDarkTheme;
    document.body.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
});

function startCountdown(eventName, eventDateTime) {
    const countdownContainer = document.getElementById('countdownContainer');
    countdownContainer.innerHTML = `<h2>${eventName}</h2><div id="countdown"></div>`;

    function updateCountdown() {
        const now = new Date();
        const timeDiff = eventDateTime - now;

        if (timeDiff <= 0) {
            clearInterval(interval);
            countdownContainer.innerHTML = `<h2>${eventName}</h2><div>Event has occurred!</div>`;
            return;
        }

        const months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = 
            `${months} months ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
    }

    interval = setInterval(updateCountdown, 1000);
    updateCountdown();
}