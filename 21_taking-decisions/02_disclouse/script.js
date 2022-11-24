// This functions will make the ___ placeholder not error. You can ignore it.
const ___ = (..._) => console.log("There are still gaps in the file!");

// What follows below are a bunch of "helper functions"
// These are small functions that do a single thing
// The idea is to make the code more readable by extracting something common like:
//
// `element.style.display = "none"`
//
// and give it a name that more clearly expresses the intention.
// In this case, the above conceptually "hides" an element, so we will call it just that.
//
// They also include some special information, a "JSDoc" documentation comment, that gives us
// some extra information. You don't need to understand this now, but you can see the effect
// by hovering the mouse cursor over the function name when it occurs in the code.
//
// You don't need to do write any helper functions, but you will have to use them.

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

// With those out of the way, this is where the real exercise begins!

// All of the relevant HTML elements are already selected for you:
const refundHeader = document.querySelector("#disclosure-refund-header");
const refundChevronUp = document.querySelector("#disclosure-refund-chevron-up");
const refundChevronDown = document.querySelector(
  "#disclosure-refund-chevron-down"
);
const refundPanel = document.querySelector("#disclosure-refund-panel");

function refundDisclosure() {
  // Check if `refundPanel` is hidden
  if (elementIsHidden(refundPanel)) {
    // This is where we want to use the helper functions!

    // If that is the case, we want to show  `refundPanel`  using the helper function
    showElement(refundPanel);

    // We want to hide the chevron that points down (v)
    hideElement(refundChevronDown);

    // And show the one that points up (^)
    showElement(refundChevronUp);
  } else {
    // And the other way around...

    // Hide the panel by adding the "hide" class
    hideElement(refundPanel);

    // Show the downward pointing chevron (v)
    showElement(refundChevronDown);

    // Hide the upward pointing chevron (^)
    hideElement(refundChevronUp);
  }
}

// If the user clicks the header, we want to run the function above
refundHeader.addEventListener("pointerdown", refundDisclosure);

/* Now do the same thing but with the support disclosure! This is
   more or less the exact same code. */

const supportHeader = document.querySelector("#disclosure-support-header");
const supportChevronUp = document.querySelector(
  "#disclosure-support-chevron-up"
);
const supportChevronDown = document.querySelector(
  "#disclosure-support-chevron-down"
);
const supportPanel = document.querySelector("#disclosure-support-panel");

function supportDisclosure() {
  // Check if `supportPanel` is hidden
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

// Now, register the listener above to the `pointerdown` event on the
// `supportHeader`. You will have to write all of this on your own,
// but remember, it is _very_ similiar to the first one. */
refundHeader.addEventListener("pointerdown", refundDisclosure);
supportHeader.addEventListener("pointerdown", supportDisclosure);

/* Challenge!
 * The two eventListener functions are more or less the same,
 * can you write a function that you can re-use in both?
 * This is advanced and cover functions that we have not
 * talked about, so feel free to ignore this.
 *
 * HINT: `querySelector` can be "scoped" by
 *       running it of an element instead of document.
 */
