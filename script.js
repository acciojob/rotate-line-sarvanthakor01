//your JS code here. If required.
// Select the line element
const line = document.getElementById('line');

// Initialize the rotation angle
let angle = 0;

// Function to rotate the line
function rotateLine() {
    angle += 2; // Increment angle by 2 degrees
    line.style.transform = `rotate(${angle}deg)`; // Apply rotation
}

// Set interval to rotate every 20 milliseconds
setInterval(rotateLine, 20);
