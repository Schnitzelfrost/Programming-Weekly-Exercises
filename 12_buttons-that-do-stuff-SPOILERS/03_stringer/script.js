"use strict";

/* 
 * 3. Stringer 
 * 
 * This is the completed, spoiler version of the exercise.
 * You can use it to get hints, check or annotate the exercise.
 * 
 */

let stringerString = "S";
const characterInput = document.querySelector("#stringer-input-character");
const stringerDisplay = document.querySelector("#stringer-output-paragraph");

const addButton = document.querySelector("#stringer-input-button-add");
const clearButton = document.querySelector("#stringer-input-button-clear");

function addCharacter() {
  const newCharacter = characterInput.value;  // Get the character that is in the input
  stringerString = stringerString + newCharacter;

  stringerDisplay.innerHTML = stringerString; // Update the output paragarph element
  characterInput.value = "";  // Clear the input
}

addButton.addEventListener("pointerdown", addCharacter);

function clear() {
  stringerString = "";
  stringerDisplay.innerHTML = stringerString;
}

clearButton.addEventListener("pointerdown", clear);
