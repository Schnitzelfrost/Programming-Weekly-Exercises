//Counter
const buttonUp = document.querySelector("#counter-body-button-increment");
const buttonDown = document.querySelector("#counter-body-button-decrement");
const counterNumber = document.querySelector("#counter-body-number");

function counterUp() {
  const oldNumber = Number.parseInt(counterNumber.innerHTML);
  const newNumber = oldNumber + 1;
  counterNumber.innerHTML = newNumber;
}

function counterDown() {
  const oldNumber = Number.parseInt(counterNumber.innerHTML);
  const newNumber = oldNumber - 1;
  counterNumber.innerHTML = newNumber;
}

buttonUp.addEventListener("pointerdown", counterUp);
buttonDown.addEventListener("pointerdown", counterDown);

//Juggler
const clown = "🤡";

const buttonLeft = document.querySelector("#juggler-body-button-first");
const buttonRight = document.querySelector("#juggler-body-button-second");

function jugglerLeft() {
  buttonLeft.innerHTML = "";
  buttonRight.innerHTML = clown;
}

function jugglerRight() {
  buttonRight.innerHTML = "";
  buttonLeft.innerHTML = clown;
}

buttonLeft.addEventListener("pointerdown", jugglerLeft);
buttonRight.addEventListener("pointerdown", jugglerRight);


