/*
 * 3. Tabs
 *
 * TASK: Tab interfaces are commmon when we want selective disclosure of larger
 * sections of information, often  some kind of logical sub-divison of the program.
 * Your task is to make a simple tabbed interface that consits of two parts:
 *
 * 1. A "tab bar" of triggers.
 * 2. A panel with the content of the open tab.
 *
 * Clicking on a tigger in the tab bar should correspondingly show the
 * correct content in the panel. Unlike the disclorsure and accordion widget
 * we have made before, the tab introduces a layer of indirection. It is not
 * really possible to keep the trigger and the panel in the same element.
 * The trigger bar is displayed at all times, where as the panel is shifting.
 * In order to make this work, you will need to introduce some kind of indirect
 * linking between the tab and the panel. There are muntiple ways of doing this,
 * but I will show you how we can get and set custom HTML attributes.
 *
 * This exercise is presented as a "fill in the blanks", but you could also
 * try to do it from scratch if you feel adventurous.
 *
 */

const tabTriggers = document.querySelector("#tab-triggers");
const tabPanels = document.querySelector("#tab-panels");

/**
 * First, we make a function called `toggleTab`, this will be used
 * as a callback function that fires when the user clicks on one of
 *  the triggers in the tab bar
 * @param {PointerEvent} event
 */
function toggleTab(event) {
  /* select ALL elements with the class ".tab-trigger" */
  const triggers = document.querySelectorAll(".tab-trigger");

  /* get the tab we have clicked by looking at the `target` of the event */
  const clickedTrigger = event.target;

  // Highlight the trigger ther user clicked

  /* loop over `triggers` with the loop varible `trigger` */
  for (const trigger of triggers) {
    /* check if the trigger is the one the user clicked */
    if (trigger == clickedTrigger) {
      /* if that is the case, add the class`trigger-focused` */
      trigger.classList.add("trigger-focused");
    } else {
      /* if not, we don't want it to have the `trigger-focused` class */
      trigger.classList.remove("trigger-focused");
    }
  }

  // Now we need to show the corresponding panel!

  /* first, get the panels by selecting ALL elements with the class ".tab-panel" */
  const panels = document.querySelectorAll(".tab-panel");

  /* second, we need to get the "tab-panel-id" from the trigger, if you are confused by this, scroll down first. */
  const tabPanelID = clickedTrigger.getAttribute("tab-panel-id");

  /* Loop over `panels` with the loop variable `panel`  */
  for (const panel of panels) {
    /* If the PANEL has the ID that matches the tabPanelId that was in our triggers attribute... */
    if (panel.id === tabPanelID) {
      /* ...remove the css class "hide" */
      panel.classList.remove("hide");
    } else {
      /* otherwise, we want to hide it */
      panel.classList.add("hide");
    }
  }
}

/**
 * Create a panel, the part where the text goes, and hide it by default.
 * @param {string} text
 * @returns Element
 */
function makePanel(text) {
  /* create a "p" element */
  const panel = document.createElement("p");

  /* add the classes "tab-panel" & "hide"*/
  panel.classList.add("tab-panel", "hide");

  /* append the text that we get as a function input */
  panel.append(text);

  /* return the panel*/
  return panel;
}

/**
 * Creates a tab trigger and adds it and the attached panel to the corresponding elements.
 * @param {number} panelID
 * @param {string} label
 * @param {Element} panel
 * @param {boolean} isDefaultFocus
 */
function makeTab(panelID, label, panel, isDefaultFocus) {
  /* Make a new li */
  const trigger = document.createElement("li");

  /* Add the class "tab-trigger" */
  trigger.classList.add("tab-trigger");

  /* Append the function input `label` */
  trigger.append(label);

  /* Register the function `toggleTab` (see above) as an event listener for "pointerdown" */
  trigger.addEventListener("pointerdown", toggleTab);

  /* Here, we add the attribute "tab-panel-id" and set it to the value of our funciton input `tabId`.
       Before: <li>Label</li>
       After: <li tab-panel-id="tabId">Label</li>
       We are allowed to add any arbitrary attribute to an element. */
  trigger.setAttribute("tab-panel-id", panelID);

  /* Make sure we also set the id of the panel to match the attribute we added to the trigger */
  panel.id = panelID;

  /* Check if we are the default focus, also something we get as an input */
  if (isDefaultFocus) {
    /* If so, we add some classes and remove the "hide" class */
    trigger.classList.add("trigger-focused");
    panel.classList.remove("hide");
  }

  /* Finally, append everything */
  tabTriggers.append(trigger);
  tabPanels.append(panel);
}

makeTab(
  1,
  "First",
  makePanel(
    "This is a tab with a panel. The tab itself is sometimes called the 'trigger.'"
  ),
  true
);

makeTab(
  2,
  "Second",
  makePanel("This is another tab with a panel. A fish lives here 🐠"),
  false
);
