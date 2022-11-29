/*
 * 2. TODO List
 *
 * TASK: fill in the blanks to make the widget work.
 * The final example is a TODO list where you can add and remove items
 * Follow the comments!
 *
 */

// This functions will make the ___ placeholder not error. You can ignore it.
const ___ = (..._) => console.log("There are still gaps in the file!");

const addTodoButton = document.querySelector("#dom-manipulation-input-button");
const todoInput = document.querySelector("#dom-manipulation-input-text");
const todoList = document.querySelector("#dom-manipulation-todo-list");

/**
 * Add a TODO item into the pre-defined list
 * @param {PointerEvent|KeyboardEvent} event
 */
function removeTodoItem(event) {
  // Any `event` object has a `target` property that holds the element that fired the event
  const element = event.target; //  Put the target of this event in a variable
  element.remove(); // Call the remove function to delete the item
}

/**
 * Add a TODO item into the pre-defined list
 * @param {string} todo
 */
function makeTodoItem(todo) {
  const todoItem = document.createElement("li"); // Use the createElement function to create a li
  todoItem.innerHTML = todo; // Set the contents of the li to be the todo string we get as input
  todoItem.addEventListener("pointerdown", removeTodoItem); // Add an event listener to remove the item on pointer down

  return todoItem; // return the new element
}

/**
 * Add a TODO item into the pre-defined list
 * @param {Event} event
 */
function addTodoItem(event) {
  // The following code only fires on certain events and under certain conditions.
  // Can you figure out what it does and why it does it?
  if (event.type === "keydown" && event.code !== "Enter") {
    return;
  }

  const newTodo = todoInput.value; // Get the string contents of `todoInput` and put in a variable
  if (newTodo.length === 0) return; // Exit early if the string is empty

  const todoItem = makeTodoItem(newTodo); // Call the makeTodoItem our new todo string to get a new todo element
  todoList.append(todoItem); // Add the new todoItem to the list of todoItems

  todoInput.value = ""; // Reset the input by changing it's value to the empty string
}

// Notice how we are re-using the same listener/callback on two different elements
// and for two different types of events! How is this possible?
addTodoButton.addEventListener("pointerdown", addTodoItem);
todoInput.addEventListener("keydown", addTodoItem);

// Add the eventLister to the placeholders using a loop, a construct
// that we will meet next week!
for (const todoItem of todoList.children) {
  todoItem.addEventListener("pointerdown", removeTodoItem);
}

/*
 * EXTRA:
 * The widget does not handle the case of the an empty todo list very well,
 * try to remove all the items and you will see what I mean.
 * Add functionality to cover this "edge case". You could either use CSS to
 * conditionally show and hide an "empty list"-element, or you could programatically
 * add/remove an "empty list" element by creating and destroying DOM nodes.
 */
