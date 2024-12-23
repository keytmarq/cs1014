// script.js

// Get the box and button elements
const box = document.querySelector('.revolving-box');
const toggleRotationBtn = document.getElementById('toggleRotationBtn');

let isRotating = true; // Initial state of rotation

// Add click event listener to toggle the rotation
toggleRotationBtn.addEventListener('click', function() {
  if (isRotating) {
    box.style.animation = 'none'; // Stop rotation
    toggleRotationBtn.textContent = 'Start Rotation'; // Change button text
  } else {
    box.style.animation = 'rotateCube 5s infinite linear'; // Start rotation
    toggleRotationBtn.textContent = 'Pause Rotation'; // Change button text
  }
  isRotating = !isRotating; // Toggle the state
});
