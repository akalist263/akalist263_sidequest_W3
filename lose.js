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
const gameBtn = {
  x: 200, // x position (centre of the button)
  y: 500, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "Press to Begin", // text shown on the button
};

// ------------------------------
// Main draw function for this screen
// ------------------------------
// drawGame() is called from main.js *only*
// when currentScreen === "game"
function drawGame() {
  // Set background colour for the game screen
  background(1, 68, 33);

  // ---- Title and instructions text ----
  fill(223, 238, 218); // light green text
  textSize(32);
  textAlign(CENTER, CENTER);
  text("The Magical Forest", width / 2, 160);

  textSize(18);
  text(
    "Background: You are seeking to find a magical potion of healing for your sibling with an ailment.",
    width / 2,
    210,
  );
  text(
    "You have heard whispers about a wizard in the forest who holds to ability to make such a potion,",
    width / 2,
    250,
  );
  text(
    "and you decide to venture into the Magical Forest to search for him.",
    width / 2,
    290,
  );
  text(
    "Instructions: Select one of three choices to progress the story.",
    width / 2,
    330,
  );

  // ---- Draw the button ----
  // We pass the button object to a helper function
  drawGameButton(gameBtn);

  // ---- Cursor feedback ----
  // If the mouse is over the button, show a hand cursor
  // Otherwise, show the normal arrow cursor
  cursor(isHover(gameBtn) ? HAND : ARROW);
}

// ------------------------------
// Button drawing helper
// ------------------------------
// This function is responsible *only* for drawing the button.
// It does NOT handle clicks or game logic.
function drawGameButton({ x, y, w, h, label }) {
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
function gameMousePressed() {
  // Only trigger the outcome if the button is clicked
  if (isHover(gameBtn)) {
    currentScreen = "story 1";
  }
}
