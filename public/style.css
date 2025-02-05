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


const game = document.querySelector(".game");
const levelOne = document.querySelector(".level-one");
const levelTwo = document.querySelector(".level-two");
const levelNumber = document.querySelector(".level-number");
const description = document.querySelector(".description");
const gameBtn = document.querySelector(".game-btn");

function checkCollision(value) {
  if (value.classList.contains("maze-border")) {
    description.textContent = "You lose the game!";
    game.style.pointerEvents = "none";
    restartGame();
  } else {
    return 0;
  }
}

function checkFinish(value) {
  if (value.classList.contains("finish")) {
    description.textContent =
      "Congratulations! You win first level of the game.";
    game.style.pointerEvents = "none";
    startLevelTwo();
  } else if (value.classList.contains("end-game")) {
    description.textContent = "Congratulations! You win the game.";
    game.style.pointerEvents = "none";
    gameBtn.style.display = "inline-block";
    gameBtn.textContent = "Play again!";
    restartGame();
  } else {
    return 0;
  }
}

window.addEventListener("mousemove", (e) => {
  checkCollision(e.target);
  checkFinish(e.target);
});

function restartGame() {
  gameBtn.style.display = "inline-block";
  gameBtn.textContent = "Play again!";
  gameBtn.addEventListener("click", () => {
    game.style.pointerEvents = "all";
    gameBtn.style.display = "none";
    levelOne.style.display = "block";
    levelTwo.style.display = "none";
    levelNumber.textContent = 1;
    description.textContent =
      "Make it to the finish line.You Should not touch the border of the maze.";
  });
}

function startLevelTwo() {
  gameBtn.style.display = "inline-block";
  gameBtn.textContent = "Level 2";

  gameBtn.addEventListener("click", () => {
    game.style.pointerEvents = "all";
    levelNumber.textContent = 2;
    levelOne.style.display = "none";
    levelTwo.style.display = "block";
    description.textContent =
      "Make it to the finish line.You Should not touch the border of the maze.";
  });
}
