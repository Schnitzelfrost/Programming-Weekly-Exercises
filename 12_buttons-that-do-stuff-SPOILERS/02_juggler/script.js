"use strict";

/*
 * 2. Juggler
 *
 * This is the completed, spoiler version of the exercise.
 * You can use it to get hints, check or annotate the exercise.
 *
 */

// Select the first button & put it in a variable:
// HINT: you will have to go into the HTML and find the ID of each button, then make a selector as a string.
const firstButton = document.querySelector("#juggler-body-button-first");

// Select the second button & put it in a variable:
const secondButton = document.querySelector("#juggler-body-button-second");

// Make a variable for the "ball"
// HINT: look at the code above you to see how you make variables.
const ball = "🏀";

function juggleForward() {
  // Set the contents of the first button, should be empty
  firstButton.innerHTML = "";

  // Set the contents of the second button, should have the ball
  secondButton.innerHTML = ball;
}

// Add behaviour to the first button, we want to pass on the ball to the second button:
firstButton.addEventListener("pointerdown", juggleForward);

function juggleBackward() {
  // Set the contents of the second button, should be empty
  secondButton.innerHTML = "";

  // Set the contents of the first button, should have the ball
  firstButton.innerHTML = ball;
}

// Add behaviour to the second button, we want to pass on the ball to the first button:
secondButton.addEventListener("pointerdown", juggleBackward);




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

function ambidextrousJuggler(from, to) {
  return function () {
    from.innerHTML = "";
    to.innerHTML = ball;
  }
}

/* You would use this function in the following way:

firstButton.addEventListener("pointerdown", ambidextrousJuggler(firstButton, secondButton));
secondButton.addEventListener("pointerdown", ambidextrousJuggler(secondButton, firstButton));

Calling `ambidextrousJuggler(firstButton, secondButton)` runs the function, which immediately
returns the new, anonymous, function:

function () {
    from.innerHTML = "";
    to.innerHTML = ball;
  }

Where the meaning of `from` and `to` remains connected to the scope the made it.

This is a bit more complex, so don't feel bad if you don't get it. However, you 
can do a bit of `console.log`:ing to poke around and discover the nuances!



An alterantive, even more advanced version of this would be:

function ambidextrousJuggler(to) {
  return function (event) {
    event.target.innerHTML = "";
    to.innerHTML = ball;
  }
}

This has one paramter less, as we know who is "passing" the ball from the 
`event` object. However, this is not something we have talked about yet, 
so the version above should look very strange to you if you have not done 
any Javascript before!





Just for fun/confusion, here is a version of the function 
written using the "arrow" syntax.

const ambidextrousJuggler = to => event => {
    event.target.innerHTML = "";
    to.innerHTML = ball;
}

*/