  <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
  <script>
    // JavaScript to toggle rotation of the revolving box
    const box = document.querySelector('.revolving-box');
    const toggleRotationBtn = document.getElementById('toggleRotationBtn');

    let isRotating = true; // Initial state of rotation

    toggleRotationBtn.addEventListener('click', function() {
      if (isRotating) {
        // Pause rotation by removing the animation
        box.style.animation = 'none';
        toggleRotationBtn.textContent = 'Start Rotation'; // Change button text
      } else {
        // Resume rotation by adding the animation back
        box.style.animation = 'rotateCube 5s infinite linear';
        toggleRotationBtn.textContent = 'Pause Rotation'; // Change button text
      }
      
      // Toggle the state
      isRotating = !isRotating;
    });