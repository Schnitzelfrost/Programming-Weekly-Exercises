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
