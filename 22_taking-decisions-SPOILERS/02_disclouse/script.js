/* 
 * 2. Disclosure
 * 
 * TASK: fill in the blanks to make the widget work.
 * We are looking for a behaviour where a click on the disclosure header
 * reveals the text in the disclosure panel. Follow the comments!
 * 
 */

// All of the relevant HTML elements are already selected for you
const refundHeader = document.querySelector("#disclosure-refund-header");
const refundChevronUp = document.querySelector("#disclosure-refund-chevron-up");
const refundChevronDown = document.querySelector("#disclosure-refund-chevron-down");
const refundPanel = document.querySelector("#disclosure-refund-panel");


/** 
 * Return `true` if element is hidden.
 * @param {Element} element 
 */
function elementIsHidden(element) {
  return element.style.display === "none";
}

/**  
 * Makes sure the element is showing by setting `display` to `none`.
 * @param {Element} element 
 */
function hideElement(element) {
  element.style.display = "none";
}

/** 
 * Makes sure the element is showing by setting `display` to `flex`.
 * @param {Element} element 
 */
function showElement(element) {
  element.style.display = "flex";
}



function refundDisclosure() {
  // Check if `refundPanel` is hidden
  if (elementIsHidden(refundPanel)) {
    // If that is the case, we want to show the element using the helper function
    showElement(refundPanel);

    // We want to hide the chevron that points down (v)
    hideElement(refundChevronDown);

    // And show the one that points up (^)
    showElement(refundChevronUp);

  } else {
    // Hide the panel by adding the "hide" class
    hideElement(refundPanel);

    // Show the downward pointing chevron (v)
    showElement(refundChevronDown);

    // Hide the upward pointing one
    hideElement(refundChevronUp);
  }
}

// If the user clicks the header:
refundHeader.addEventListener("pointerdown", refundDisclosure);




/* Now do the same thing but with the support disclosure! This is
   more or less the exact same code. */

const supportHeader = document.querySelector("#disclosure-support-header");
const supportChevronUp = document.querySelector("#disclosure-support-chevron-up");
const supportChevronDown = document.querySelector("#disclosure-support-chevron-down");
const supportPanel = document.querySelector("#disclosure-support-panel");


function supportDisclosure() {
  // Check if `refundPanel` is hidden
  if (elementIsHidden(supportPanel)) {
    // If that is the case, we want to show the element using the helper function
    showElement(supportPanel);

    // We want to hide the chevron that points down (v)
    hideElement(supportChevronDown);

    // And show the one that points up (^)
    showElement(supportChevronUp);

  } else {
    // Hide the panel by adding the "hide" class
    hideElement(supportPanel);

    // Show the downward pointing chevron (v)
    showElement(supportChevronDown);

    // Hide the upward pointing one
    hideElement(supportChevronUp);
  }
}

/* You will have to write all of this on your own, but remember,
   it is _very_ similiar to the first one. */
supportHeader.addEventListener("pointerdown", supportDisclosure);











/* Challenge! 
 * The two eventListener functions are more or less the same,
 * can you write a function that you can re-use in both?
 * This is advanced and cover functions that we have not
 * talked about, so feel free to ignore this.
 * 
 * HINT: `querySelector` can be "scoped" by
 *       running it of an element instead of document.
 * 
 * SOLUTION: 
 * We get the header from the `event` object (more on that tomorrow!) 
 * We can use the header as a "base" for `querySelector`, which means
 * that we will "start" looking at that part of the subtree. This
 * means that we can select the elements that we want using the class
 * as opposed to the id. After this, we just do the same thing!
 * 
 */

function toggleDisclosure(event) {
  const header = event.target;

  const chevronUp = header.querySelector(".chevron-up");
  const chevronDown = header.querySelector(".chevron-down");
  const panel = header.querySelector(".disclosure-panel");

  if (elementIsHidden(panel)) {
    showElement(panel);
    hideElement(chevronDown);
    showElement(chevronUp);
  } else {
    hideElement(panel);
    showElement(chevronDown);
    hideElement(chevronUp);
  }
}

/*
 * You can try this out with supportHeader.addEventListener("pointerdown", toggleDisclosure);
 * Or, if you want to be really fancy:
 * 
 * for (const disclosure of document.querySelectorAll(".disclosure")) {
 *   disclosure.addEventListener("pointerdown", toggleDisclosure);
 * }
 * 
 * This is advanced level stuff, we have not even covered the `for` yet!
 */