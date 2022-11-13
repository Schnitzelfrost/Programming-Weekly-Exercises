"use strict"; // We want to get some help from the strict mode to catch errors.

/*
 * 2. Juggler
 *
 * Do this one in smaller groups or alone, uncommenting the code as you go.
 * TASK: Read the comment for each line, then uncomment and fix the code.
 * The juggler should store a "ball" variable (a string) which it "juggles" from button to button.
 * Clicking on the first button should send it over to the second one, and vice versa.
 *
 */

// Select the first button & put it in a variable:
// HINT: you will have to go into the HTML and find the ID of each button, then make a selector as a string.

const firstButton = document.querySelector("#juggler-body-button-first");
console.log(firstButton);


// Select the second button & put it in a variable:

const secondButton = document.querySelector("#juggler-body-button-second");


// Make a variable for the "ball"
// HINT: look at the code above you to see how you make variables.

const ball = "🥎";


// Write a function that "passes" the ball from the first to the second button

function juggleForward() {
  // Set the contents of the first button, should be empty
  firstButton.innerHTML = "";

  // Set the contents of the second button, should have the ball
  secondButton.innerHTML = ball;
}


// Register the function as an event listener on the first

firstButton.addEventListener("pointerdown", juggleForward);


// Write a function that does the opposite, passing the ball from the second to the first buttion

/*
function juggleBackward() {
  // Set the contents of the second button, should be empty
  ___.innerHTML = ___;

  // Set the contents of the first button, should have the ball
  ___.innerHTML = ___;
}
 */


// Add this function as a listener on the second button

/*
  ___.addEventListener("pointerdown", ___);
*/




/****************************************
 * Challenge!
 * 
 * Re-write the listener functions to take two arguments:
 *   1. The button to pass from
 *   2. The button to pass to
 * 
 * And use it instead of two dedicated functions.
 * HINT: The function will have to return a function in order to 
 *       work as a listener.
 */
