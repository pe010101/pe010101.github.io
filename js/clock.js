function updateAllClocks() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours.toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

    // Update all clocks
    if (document.getElementById('clock')) {
        document.getElementById('clock').textContent = timeString;
    }
    if (document.getElementById('header-clock-display')) {
        document.getElementById('header-clock-display').textContent = timeString;
    }
    if (document.getElementById('floating-clock-display')) {
        document.getElementById('floating-clock-display').textContent = timeString;
    }
}

// Update all clocks every second
setInterval(updateAllClocks, 1000);

// Run immediately to avoid delay
updateAllClocks();
