/*
 * 1. Form Validation
 *
 * We will go over this code in class, with a live demo.
 * TASK: annotate the code with comments, explaning each line in your own words.
 *
 */

//setting up input form for username
const inputUsername = document.querySelector("#form-validation-username");
//setting up instruction for username
const feedbackUsername = document.querySelector(
  "#form-validation-feedback-username"
);
//letting it be false for later use case
let usernameCorrect = false;

//setting up input form for password
const inputPassword = document.querySelector("#form-validation-password");
//setting up instruction for password
const feedbackPassword = document.querySelector(
  "#form-validation-feedback-password"
);
//letting it be false for later use case
let passwordCorrect = false;

//setting up submit button
const inputSubmit = document.querySelector("#form-validation-submit");

// The username input
function validateUsername(event) {
  const userInput = event.target.value; // This is how we get the thing the user changed.

  //if the string is less than 5
  if (userInput.length < 5) {
    //adding a new class, in this case its the class containing color red.
    inputUsername.classList.add("widget-input-error");
    feedbackUsername.classList.add("widget-input-error");
    usernameCorrect = false;
  } else {
    inputUsername.classList.remove("widget-input-error");
    feedbackUsername.classList.remove("widget-input-error");
    // setting it to true when the statement is fulfilled
    usernameCorrect = true;
  }

  //the reason for 2 of the exact same functions to exist in both pass and user, is for different use cases (orders)
  if (usernameCorrect && passwordCorrect) {
    //self-explained element method
    inputSubmit.disabled = false;
  } else {
    inputSubmit.disabled = true;
  }
}

// The password input
function validatePassword(event) {
  const userInput = event.target.value;

  if (userInput.length < 10 || userInput.length > 20) {
    feedbackPassword.classList.add("widget-input-error");
    inputPassword.classList.add("widget-input-error");
    passwordCorrect = false;
  } else {
    feedbackPassword.classList.remove("widget-input-error");
    inputPassword.classList.remove("widget-input-error");
    passwordCorrect = true;
  }

  if (usernameCorrect && passwordCorrect) {
    inputSubmit.disabled = false;
  } else {
    inputSubmit.disabled = true;
  }
}

// The password input
inputUsername.addEventListener("input", validateUsername);
inputPassword.addEventListener("input", validatePassword);
