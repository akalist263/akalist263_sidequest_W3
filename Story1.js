// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawStory1() → what the story 1 screen looks like
// 2) input handlers → what happens when the player clicks or presses keys
// 3) helper functions specific to this screen

// ------------------------------
// Button data
// ------------------------------
// This object stores all the information needed to draw
// and interact with the button on the story 1 screen.
// Keeping this in one object makes it easier to move,
// resize, or restyle the button later.
/////////////////// ------------------------------------------------------- Need help with the multiple buttons
/////////////////// ------------------------------------------------------- calling the functions at the bottom
// Path 1 Button
const Story1Btn1 = {
  x: 200, // x position (centre of the button)
  y: 500, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "Path 1", // text shown on the button
};

// Path 2 Button
const Story1Btn2 = {
  x: 650, // x position (centre of the button)
  y: 500, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "Path 2", // text shown on the button
};

// Path 3 Button
const Story1Btn3 = {
  x: 800, // x position (centre of the button)
  y: 500, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "Path 3", // text shown on the button
};

// ------------------------------
// Main draw function for this screen
// ------------------------------
// drawStory1() is called from main.js *only*
// when currentScreen === "story1"
function drawStory1() {
  // Set background colour for the story 1 screen
  background(0, 0, 0);

  // ---- Title and instructions text ----
  fill(223, 238, 218); // light green text
  textAlign(CENTER, CENTER);

  textSize(18);
  text(
    "You approach the forest to begin your journey, only to realize, this is no journey at all.",
    width / 2,
    210,
  );
  text(
    "You find the path, but see that it branches off into three separate paths.",
    width / 2,
    250,
  );
  fill(255, 218, 34); //change text to gold
  text(
    "The path to your left is littered with twigs and rocks, and some strange glowing powder. This is path #1.",
    width / 2,
    280,
  );
  fill(246, 247, 235); //change text to ivory
  text(
    "The path immediately infront of you is covered with a thick fog, unable to see through, and the ground is covered with jagged rocks. This is path #2.",
    width / 2,
    330,
  );
  fill(151, 96, 32); //change text to brown
  text(
    "The path to your right is covered with thick, thorned branches. This is path #3.",
    width / 2,
    310,
  );

  textSize(22);
  fill(223, 238, 218); //change text to back to light
  text("Which path do you venture down?", width / 2, 350);

  // ---- Draw the button ----
  // We pass the button object to a helper function
  drawStory1Button(Story1Btn1); /////////////////////////////// Problems here and cursor hover

  // ---- Cursor feedback ----
  // If the mouse is over the button, show a hand cursor
  // Otherwise, show the normal arrow cursor
  cursor(isHover(Story1Btn1) ? HAND : ARROW);

  drawStory1Button(Story1Btn2); /////////////////////////////// Problems here and cursor hover

  // ---- Cursor feedback ----
  // If the mouse is over the button, show a hand cursor
  // Otherwise, show the normal arrow cursor
  cursor(isHover(Story1Btn2) ? HAND : ARROW);

  drawStory1Button(Story1Btn3); /////////////////////////////// Problems here and cursor hover

  // ---- Cursor feedback ----
  // If the mouse is over the button, show a hand cursor
  // Otherwise, show the normal arrow cursor
  cursor(isHover(Story1Btn3) ? HAND : ARROW);
}

// ------------------------------
// Button drawing helper
// ------------------------------
// This function is responsible *only* for drawing the button.
// It does NOT handle clicks or game logic.
function drawStory1Button({ x, y, w, h, label }) {
  //////// Problems here -- do I make multiple of these?
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
// only when currentScreen === "story1"
function Story1MousePressed() {
  // Only trigger the outcome if the button is clicked
  if (isHover(Story1Btn1)) {
    // CHANGE THIS to go to wherever you want!
    // For now, going to win screen as an example
    currentScreen = "Path1";
  } else if (isHover(Story1Btn2)) {
    currentScreen = "Path2";
  } else if (isHover(Story1Btn3)) {
    currentScreen = "Path3";
  }
}
