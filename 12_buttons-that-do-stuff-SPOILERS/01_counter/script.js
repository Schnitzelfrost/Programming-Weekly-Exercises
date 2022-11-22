"use strict"; // We want to get some help from the strict mode to catch errors.

/* 
 * 1. Counter 
 * 
 * We will go over this code in class, with a live demo.
 * TASK: annotate the code with comments, explaning each line in your own words.
 * 
 */

const buttonIncrement = document.querySelector("#counter-body-button-increment");
const buttonDecrement = document.querySelector("#counter-body-button-decrement");
const counterNumber = document.querySelector("#counter-body-number");

function incrementCounter() {
    const oldNumber = Number.parseInt(counterNumber.innerHTML);
    const newNumber = oldNumber + 1;
    counterNumber.innerHTML = newNumber;
}

function decrementCounter() {
    const oldNumber = Number.parseInt(counterNumber.innerHTML);
    const newNumber = oldNumber - 1;
    counterNumber.innerHTML = newNumber;
}

buttonIncrement.addEventListener("pointerdown", incrementCounter);

buttonDecrement.addEventListener("pointerdown", decrementCounter);
