function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours.toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

    document.getElementById('clock').textContent = timeString;
}

// Function to reposition the clock
function repositionClock() {
    const clockContainer = document.getElementById('top-right-clock');
    
    if (clockContainer) {
        // Remove fixed positioning and center it
        clockContainer.style.position = 'static';
        clockContainer.style.margin = '30px auto';
        clockContainer.style.textAlign = 'center';
        clockContainer.style.maxWidth = '300px';
        
        // Move it after the flex-container
        const flexContainer = document.querySelector('.flex-container');
        if (flexContainer) {
            flexContainer.after(clockContainer);
        }
    }
}

// Update the clock every second
setInterval(updateClock, 1000);

// Run it once immediately to avoid a 1-second delay
updateClock();

// Reposition the clock when page loads
document
