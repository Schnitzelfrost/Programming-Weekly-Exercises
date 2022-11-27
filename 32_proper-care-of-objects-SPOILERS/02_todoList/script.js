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
    const element = event.target;
    element.remove();
}


/**
 * Add a TODO item into the pre-defined list
 * @param {string} todo 
 */
function makeTodoItem(todo) {
    const todoItem = document.createElement("li");
    todoItem.innerHTML = todo;
    todoItem.addEventListener("pointerdown", removeTodoItem);

    return todoItem;
}


/**
 * Add a TODO item into the pre-defined list
 * @param {Event} event 
 */
function addTodoItem(event) {
    if (event.type === "keydown" && event.code !== "Enter") {
        return;
    }

    const newTodo = todoInput.value;
    if (newTodo.length === 0) return;

    const todoItem = makeTodoItem(newTodo);
    todoList.append(todoItem);

    todoInput.value = "";
}


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