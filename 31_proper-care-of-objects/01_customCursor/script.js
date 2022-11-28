/*
 * 1. Custom Cursor
 *
 * TASK: Annotate each line with a comment, try to understand how everything
 *       connects. Look at the video for a reference code-thorugh.
 *
 */

let cursor;

/**
 * Return an Element reprpesenting a custom cursor.
 * @param {number} width
 * @param {number} height
 * @returns Element
 */
function makeCustomCursor(width, height) {
  const cursor = document.createElement("div");
  cursor.id = "cursor";

  cursor.style.width = `${width}px`;
  cursor.style.height = `${height}px`;

  cursor.style.position = "fixed";
  cursor.style.left = 0;
  cursor.style.top = 0;
  cursor.style.borderRadius = "50%";

  cursor.style.transition = "background-color 0.1s";
  cursor.style.backgroundColor = "black";
  cursor.style.opacity = "90%";
  cursor.style.border = "1px solid #00000011";

  return cursor;
}

/**
 * Draw a custom mouse under the mouse.
 * @param {PointerEvent} event
 */
function updateCustomCursor(event) {
  const pointer = {
    x: event.clientX,
    y: event.clientY,
  };

  // We need to subtract 50% to center the pointer
  cursor.style.transform = `translate(calc(${pointer.x}px - 50%), calc(${pointer.y}px - 50%))`;
}

/**
 * Make a cursor and add it to the DOM.
 * @param {PointerEvent} event
 */
function addCustomCursor(event) {
  cursor = makeCustomCursor(30, 30);
  document.body.append(cursor);
}

// These
document.addEventListener("pointermove", addCustomCursor, { once: true });
document.addEventListener("pointermove", updateCustomCursor);

document.addEventListener("pointerdown", function (event) {
  cursor.style.opacity = "50%";
});

document.addEventListener("pointerup", function (event) {
  cursor.style.opacity = "30%";
});

document.body.style.cursor = "none"; // comment this to show the original cursor

/* CHALLENGE:
 *
 * This is a good template to work from if you want to experiment with more advanced
 * custom cursor interactions. A few of the things you could implement are:
 *
 *   - Change the cursor to an emoji.
 *   - Changing the shape/color of the cursor when you hover a specific DOM element.
 *   - Add a secondary shape that "follows" the cursor with a bit of a delay.
 *
 */
