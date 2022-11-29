/*
 * 2. Refactoring Disclosure 2
 *
 * Understanding loops and arrays allows us to use `querySelectorAll`,
 * a fantastic tool all affors us the ability to make our code generic.
 * Up until this point, we have had to either make HTML elements using
 * the `document.*` functions, or by selecting then via ID. Both of these
 * approaches become very inconvenient the moment we want to talk about
 * more than one element at a time. `querySelectorAll` gives us back an
 * arry of the corresponding elements, which we can loop over, giving us
 * the possiblity to add event listeners, modify the classList and so forth.
 * Using loops avoids code repetition (a.k.a. copypasta 🍝), which reduces the
 * surface for possible bugs.
 *
 * Our first version the discourse was at least 60 lines of JS.
 * Using arrays, loops and querySelectorAll, we can get it down to 20!
 *
 * TASK: Fill in the blanks, follow the comments and compare to your
 * previous refactors!
 *
 */

// This functions will make the ___ placeholder not error. You can ignore it.
const ___ = (..._) => console.log("There are still gaps in the file!");

// Select all elements with the "disclosure" class
const disclosures = document.querySelectorAll(".disclosure");

// Loop over the disclosures
for (const disclosure of disclosures) {
  // Select the correct elements using a querySelector that is local to the disclosure
  const header = disclosure.querySelector(".disclosure-header");
  const chevronUp = disclosure.querySelector(".chevron-up");
  const chevronDown = disclosure.querySelector(".chevron-down");
  const panel = disclosure.querySelector(".disclosure-panel");

  header.addEventListener("pointerdown", function (event) {
    // Toggle the "hide" class using the classList method
    panel.classList.toggle("hide");
    chevronDown.classList.toggle("hide");
    chevronUp.classList.toggle("hide");
  });
}
