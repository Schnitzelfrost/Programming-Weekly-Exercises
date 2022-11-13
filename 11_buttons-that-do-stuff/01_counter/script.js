"use strict"; // We want to get some help from the strict mode to catch errors.

/* 
 * 1. Counter 
 * 
 * We will go over this code in class, with a live demo.
 * TASK: annotate the code with comments, explaning each line in your own words.
 * 
 */

//declaring variables with the method querySelector in order to know which element to target
const buttonIncrement = document.querySelector("#counter-body-button-increment");
const buttonDecrement = document.querySelector("#counter-body-button-decrement");
const counterNumber = document.querySelector("#counter-body-number");

//function addition
function incrementCounter() {

    //number being parsed (string returns to an integer) 
    const oldNumber = Number.parseInt(counterNumber.innerHTML);
    //storing the new value
    const newNumber = oldNumber + 1;
    //giving the selected element another value
    counterNumber.innerHTML = newNumber;
}

//functionc subtraction
function decrementCounter() {

    //number being parsed (string returns to an integer)
    const oldNumber = Number.parseInt(counterNumber.innerHTML);
    //storing the new value
    const newNumber = oldNumber - 1;
    //giving the selected element another value
    counterNumber.innerHTML = newNumber;
}

//which button being pressed in order to activate the interface by using method (addEvent)
buttonIncrement.addEventListener("pointerdown", incrementCounter);
buttonDecrement.addEventListener("pointerdown", decrementCounter);

