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

    // Update all three clocks
    const clock1 = document.getElementById('clock');
    const clock2 = document.getElementById('header-clock-display');
    const clock3 = document.getElementById('floating-clock-display');
    
    if (clock1) clock1.textContent = timeString;
    if (clock2) clock2.textContent = timeString;
    if (clock3) clock3.textContent = timeString;
}

// Update all clocks every second
setInterval(updateAllClocks, 1000);

// Run immediately to avoid delay
updateAllClocks();
