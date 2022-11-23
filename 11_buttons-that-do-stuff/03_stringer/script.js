"use strict"; // We want to get some help from the strict mode to catch errors.

let words = "";
const characterInput = document.querySelector("#stringer-input-character");
const wordsDisplay = document.querySelector("#stringer-output-paragraph");

const addButton = document.querySelector("#stringer-input-button-add");
const clearButton = document.querySelector("#stringer-input-button-clear");

function typer() {
  const newWords = characterInput.value; //getting the value of the character
  words = words + newWords; //adding it to the variable

  wordsDisplay.innerHTML = words; //setting it to the display
  characterInput.value = ""; //clearing the input field
}

function clear() {
  words = ""; //emptying the string
  wordsDisplay.innerHTML = words; //displaying the string
}

addButton.addEventListener("pointerdown", typer);
clearButton.addEventListener("pointerdown", clear);
