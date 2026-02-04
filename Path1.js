// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawWin() → what the win screen looks like
// 2) input handlers → how the player returns to the start screen
//
// This file is intentionally very similar to lose.js.
// The goal is to show that win/lose screens are often
// simple “end states” with minimal logic.

// ------------------------------------------------------------
// Main draw function for win screen
// ------------------------------------------------------------
// drawWin() is called from main.js
// only when currentScreen === "win"
// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawGame() → what the game screen looks like
// 2) input handlers → what happens when the player clicks or presses keys
// 3) helper functions specific to this screen

// ------------------------------
// Button data
// ------------------------------
// This object stores all the information needed to draw
// and interact with the button on the game screen.
// Keeping this in one object makes it easier to move,
// resize, or restyle the button later.
const Path1Btn = {
  x: windowWidth / 2, // x position (centre of the button)
  y: 500, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "Play Again", // text shown on the button
};

// ------------------------------
// Main draw function for this screen
// ------------------------------
// drawGame() is called from main.js *only*
// when currentScreen === "game"
function drawPath1() {
  // Set background colour for the game screen
  background(208, 0, 0); // Set Red Background

  // ---- Text ----
  fill(255, 255, 255); // white text

  textSize(45);
  text("YOU LOST!", width / 2, 200);
  textSize(20);
  text("You chose path #1.", width / 2, 245);
  text(
    "The gold powder on the ground is enchanted fairy dust. Once you enhaled it, you fell into a deep, eternal slumber.",
    width / 2,
    265,
  );

  // Draw Buttons below

  // Play again button ///////////////////////////////////////////

  // ---- Draw the button ----
  // We pass the button object to a helper function
  drawPath1Button(Path1Btn);

  // ---- Cursor feedback ----
  // If the mouse is over the button, show a hand cursor
  // Otherwise, show the normal arrow cursor
  cursor(isHover(Path1Btn) ? HAND : ARROW);
}

// ------------------------------
// Button drawing helper
// ------------------------------
// This function is responsible *only* for drawing the button.
// It does NOT handle clicks or game logic.
function drawPath1Button({ x, y, w, h, label }) {
  rectMode(CENTER);

  // Check if the mouse is hovering over the button
  // isHover() is defined in main.js so it can be shared
  const hover = isHover({ x, y, w, h });

  noStroke();

  // Change button colour when hovered
  // This gives visual feedback to the player
  fill(
    hover
      ? color(180, 220, 255, 220) // lighter blue on hover
      : color(200, 220, 255, 190), // normal state
  );

  // Draw the button rectangle
  rect(x, y, w, h, 14); // last value = rounded corners

  // Draw the button text
  fill(0);
  textSize(28);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}

// ------------------------------
// Mouse input for this screen
// ------------------------------
// This function is called from main.js
// only when currentScreen === "story 1"
function Path1MousePressed() {
  // Only trigger the outcome if the button is clicked
  if (isHover(Path1Btn)) {
    currentScreen = "start"; // Set game back to the start
  }
}
