"use strict"; // We want to get some help from the strict mode to catch errors.

const firstButton = document.querySelector("#juggler-body-button-first");

const secondButton = document.querySelector("#juggler-body-button-second");

const ball = "🥎";

function juggleForward() {
  firstButton.innerHTML = "";
  secondButton.innerHTML = ball;
}

function juggleBackward() {
  firstButton.innerHTML = ball;
  secondButton.innerHTML = "";
}

function switcher(state1, state2) {
  return function () {
    state1.innerHTML = "";
    state2.innerHTML = "🥎";
  };
}

firstButton.addEventListener(
  "pointerdown",
  switcher(firstButton, secondButton)
);
secondButton.addEventListener(
  "pointerdown",
  switcher(secondButton, firstButton)
);
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
